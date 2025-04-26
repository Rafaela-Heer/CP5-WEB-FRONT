import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const _user = {
    name: "Ana Alface",
    username: "anaalface",
    email: "ana@ana.com",
    urlPhoto: "https://randomuser.me/api/portraits/med/women/56.jpg"
}

export default function FakeUser() {
    const [ user, setUser ] = useState(_user)

    async function loadUser() {
        let resp = await fetch("https://randomuser.me/api/")
        let data = await resp.json()
        let fakeUser = data.results[0]
        console.log("fakeUser",fakeUser);
        let _user = {
            name: fakeUser.name.first + fakeUser.name.last,
            email: fakeUser.email,
            username: fakeUser.login.username,
            urlPhoto: fakeUser.picture.medium
        };
        setUser(_user);
    }
    
    useEffect(() => {
        loadUser();
    }, []);

    return (
        <>
            <div className="flex mt-1 justify-between items-center p-1 border rounded-lg bg-gray-300">
                <div className="flex items-center gap-2">
                    <div>
                        <img src={user.urlPhoto} alt="" className="w-16 h-16 rounded-lg" />
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold text-black-600">
                            {user.name}
                        </div>
                        <div className="font-normal">
                            @{user.username}
                        </div>
                        <div className="text-gray-500 font-normal">
                            {user.email}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center bg-gray-500 w-10 h-10 rounded-md">
                    <Icon icon="mdi-refresh" className="text-3xl text-grey-600"/>
                </div>
            </div>
        </>
    )
}