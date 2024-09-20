import {NextResponse} from "next/server";
import csv from "csv-parser"
import fs from "fs"
import path from "path"

export async function GET(request) {
    const filePath = path.resolve("src/public/data.csv");
    const result = [];
    let results = {}
    let sortedResult = {}

    const sortByFilenameAsc = (result) => {
        // Sort the object by values
        return Object.fromEntries(
            Object.entries(result).sort(([, valueA], [, valueB]) => {
                return valueA.localeCompare(valueB); // Sorting by string comparison
            })
        );
    }

    const sortByFilenameDesc = (result) => {
        // Sort the object by values in descending order
        return Object.fromEntries(
            Object.entries(result).sort(([, valueA], [, valueB]) => {
                return valueB.localeCompare(valueA); // Reverse the order by switching valueB and valueA
            })
        );
    }

    const sortByCreateAt = (result) => {
        // Sort the object by created at
        return Object.fromEntries(
            Object.entries(result).sort(([keyA], [keyB]) => {
                return new Date(keyA) - new Date(keyB); // Sorting by date (since the keys are datetime strings)
            })
        );
    }

    // We read the file into a variable
    const readCSV = () => {
        return new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(csv())
                .on("data", (data) => result.push(data))
                .on("end", () => {
                    console.log("completed")
                    // Convert to a proper array
                    for (let item of result) {
                        const key = Object.keys(item)[0]
                        // Separate into an object of created_at and filename
                        const info = item[key].split(";");
                        results[info[0]] = info[1]
                    }
                    resolve(results);
                })
                .on("error", (err) => {
                    reject(err)
                })
        })
    }

    const fetchedResult = await readCSV()

    // Get search query
    const {searchParams} = new URL(request.url);
    const sortBy = searchParams.get("sort_by");


    switch (sortBy) {
        case "ascending":
            sortedResult = sortByFilenameAsc(fetchedResult);
            break;
        case "descending":
            sortedResult = sortByFilenameDesc(fetchedResult);
            break;
        case "filename":
            sortedResult = sortByCreateAt(fetchedResult);
            break;
        default:
            sortedResult = fetchedResult;
    }

    return NextResponse.json({
        // Get document from directory
        // Load document data into a variable
        // Sort based on specified option
        sortedResult
    })
}