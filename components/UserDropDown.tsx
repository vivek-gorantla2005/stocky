"use client"
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import NavItems from './NavItems'

const UserDropDown = () => {
    const router = useRouter()

    const handleSignOut = async () => {
        router.push("/sign-in")
    }

    const user = { name: 'vivek', email: 'vivek@gmail.com' }

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button className="flex items-center gap-3 text-gray hover:text-yellow-500">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className='hidden md:flex flex-col items-start'>
                            <span>{user.name}</span>
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>
                        <div className='flex relative items-center gap-3 py-2'>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>{user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className='hidden md:flex flex-col items-start'>
                                <span>{user.name}</span>
                                <span className="text-sm text-gray-500">{user.email}</span>
                            </div>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className='bg-gray-600' />
                    
                    {/* Logout button */}
                    <DropdownMenuItem
                        onClick={handleSignOut}
                        className="cursor-pointer text-red-500 focus:text-red-600"
                    >
                        Logout
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className='bg-gray-600' />
                    <nav className='sm:hidden'>
                        <NavItems/>
                    </nav>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default UserDropDown
