'use client'


import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const sistemas = [
    {
        value: "bladefall",
        label: "Bladefall",
    },
    {
        value: "d&d5e",
        label: "D&D5e",
    },
    {
        value: "bladefall 2",
        label: "Bladefall 2",
    },
    
]

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function CreateCampaign() {

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <>
            <main>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="w-[40rem] h-20 text-size-onboarding text-white border-[#1D1D1D] bg-[#1D1D1D] hover:bg-[#595959]">Criar Campanha</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-[#1D1D1D]">
                        <DialogHeader>
                            <DialogTitle className="text-white ml-[7rem]">Crie sua Campanha</DialogTitle>
                            <DialogDescription className="text-white">
                                Aqui você pode definir as configurações inicias de sua campanha.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right text-white ">
                                    Nome
                                </Label>
                                <Input id="name" value="" placeholder="Mundo de luna" className="col-span-3 text-white bg-transparent" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right text-white">
                                    Sistema
                                </Label>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger  asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-[280px]  justify-start text-zinc-400"
                                        >
                                            {value
                                                ? sistemas.find((sistemas) => sistemas.value === value)?.label
                                                : "Selecione o Sistema"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0 bg-[#1D1D1D] mt-[-2.75rem] ml-[31rem]">
                                        <Command>
                                            <CommandInput className="text-white" placeholder="Pesquise o sistema" />
                                            <CommandEmpty className="text-white">Não existe este sistema.</CommandEmpty>
                                            <CommandGroup>
                                                {sistemas.map((sistemas) => (
                                                    <CommandItem className="cursor-pointer hover:bg-zinc-800 text-white"
                                                        key={sistemas.value}
                                                        onSelect={(currentValue) => {
                                                            setValue(currentValue === value ? "" : currentValue)
                                                            setOpen(false)
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                value === sistemas.value ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                        {sistemas.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </Command>
                                    </PopoverContent>
                                </Popover>                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right text-white">
                                    Descrição
                                </Label>
                                <Textarea id="username" placeholder="Descrição de sua campanha" className="col-span-3 bg-transparent" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit" className="text-white border-white border-2 bg-transparent hover:bg-zinc-500">Criar</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </main>
        </>
    )
}