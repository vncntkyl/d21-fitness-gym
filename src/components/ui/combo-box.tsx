import * as React from "react"
import { SquarePlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { formatText } from "@/lib/format"
import { Checkbox } from "./checkbox"
import { cn } from "@/lib/utils"

export interface Option {
    id: number;
    value: string;
    label: string;
    count?: number;
}
interface comboboxProps {
    id: string;
    value: string[];
    options: Option[]
    onSelect: (value: string[]) => void
}

export function Combobox({ id, value, options, onSelect }: comboboxProps) {
    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-fit p-0 h-7"
                >
                    <div className={cn("flex items-center gap-2 pl-1 w-full", value.length === 0 ? "pr-1" : "")}>
                        <SquarePlusIcon className="opacity-50" />
                        <span className="text-xs">{formatText(id, "_", true)}</span>
                        {value.length > 0 &&
                            <div className="font-normal text-xs border-l h-full flex items-center gap-1 p-1">
                                {value.length < 3 ? value.map(option => {
                                    return <div className="border border-dashed px-1 py-0.5 capitalize font-medium opacity-85">{option}</div>
                                }) : <div className="border border-dashed px-1 py-0.5 capitalize font-medium opacity-85">{value.length} selected</div>}
                            </div>}
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit p-0 rounded-none">
                <Command>
                    <CommandInput placeholder={formatText(id, "_", true)} className="h-9 text-xs" />
                    <CommandList>
                        <CommandEmpty className="text-xs p-1 text-center">N/A</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.id}
                                    value={option.value}
                                    onSelect={(currentValue) => {
                                        onSelect(value.includes(currentValue) ? value.filter(item => item !== currentValue) : [...value, currentValue])
                                    }}
                                    className="rounded-none text-xs font-semibold capitalize"
                                >
                                    <Checkbox checked={value.includes(option.value)} />
                                    <span>{option.label}</span>
                                    <span className="ml-auto opacity-50">{option.count}</span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
