import type { ColumnFiltersState, Table } from "@tanstack/react-table"
import { Combobox } from "./combo-box";
import { type Dispatch, type SetStateAction } from "react";
import { arrayMap } from "@/data/map";

interface FilterProps<Data> {
    table: Table<Data>;
    columns: string[];
    filters: ColumnFiltersState;
    setFilters: Dispatch<SetStateAction<ColumnFiltersState>>
}
function Filter<Data>({ table, columns, setFilters }: FilterProps<Data>) {
    const columnsForFiltering = table.getAllColumns().filter(column => columns.some(key => key === column.id))

    return (
        <div className="mr-auto space-x-2">
            {columnsForFiltering.map(column => {
                const counts = table.getCoreRowModel().rows.reduce((acc, row) => {
                    const item = row.getValue<string>(column.id);
                    acc[item] = (acc[item] ?? 0) + 1
                    return acc
                }, {} as Record<string, number>)

                const options = Object.keys(counts).map(key => {
                    return {
                        id: Number(key),
                        value: arrayMap[column.id as keyof typeof arrayMap][Number(key) - 1],
                        label: arrayMap[column.id as keyof typeof arrayMap][Number(key) - 1],
                        count: counts[key]
                    }
                })
                return <Combobox id={column.id} value={column.getFilterValue() as string[] ?? []} onSelect={(value) => {
                    setFilters((prev) => {
                        if (!prev) return []

                        // check if the column already has a filter
                        const existing = prev.find((f) => f.id === column.id)

                        if (existing) {
                            if (value.length === 0) return [];
                            // update the existing filter
                            return prev.map((f) =>
                                f.id === column.id ? { ...f, value } : f
                            )
                        } else {
                            // add a new filter
                            return [...prev, { id: column.id, value }]
                        }
                    })
                }} options={options} />
            })}
        </div>
    )

}

export default Filter