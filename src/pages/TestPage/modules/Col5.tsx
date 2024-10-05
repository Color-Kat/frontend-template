import React, { memo, useEffect, useState } from 'react';
import { Button, RippleButton } from "@components/Buttons";
import {
    PurpleButton,
    SuccessButton,
} from "@UI/Buttons";
import {DoubleDropdown, Dropdown, SecondaryDropdown} from "@components/Dropdowns";
import {BsFillTrashFill, BsPerson} from "react-icons/bs";
import {
    Autocomplete,
    Checkbox,
    Input,
    RadioGroup,
    SecondarySelect,
    Select,
    SimpleInput,
    Textarea,
    Toggle
} from "@components/Inputs";
import {Modal, SecondaryModal} from "@UI/Modals";
import {Dialog} from "@headlessui/react";
import {Popover} from "@UI/Popover";
import {AiFillIeSquare} from "react-icons/ai";
import {Paginate, usePaginate} from "@components/Paginate";
import { H1 } from "@UI/Typography";
import { useUserStore } from "@/store/useUserStore.ts";
import { AcrobaticLoader } from "@UI/Loaders";

interface RowProps {

}

export const Col5: React.FC<RowProps> = memo(({}) => {

    const users = useUserStore((state) => state.users);
    const isUsersLoading = useUserStore((state) => state.isLoading);
    const loadUsers = useUserStore((state) => state.loadUsers);
    const updateUserById = useUserStore((state) => state.updateUserById);

    const [updateUserData, setUpdateUserData] = useState({id: 0, name: ""});

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div className="flex items-center justify-center flex-col gap-5 max-w-sm">
            <H1>Zustand</H1>

            <SimpleInput data={updateUserData} setData={setUpdateUserData} name="id" placeholder="id"/>
            <SimpleInput data={updateUserData} setData={setUpdateUserData} name="name" placeholder="name"/>
            <Button onClick={() => updateUserById(updateUserData.id, updateUserData.name)}>Изменить пользователя</Button>

            <ul className="flex flex-col gap-1 5">
                {isUsersLoading && <AcrobaticLoader />}

                {users.map((user) => (
                    <li>{user.name}</li>
                ))}
            </ul>
        </div>
    );
});