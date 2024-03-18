interface User {
    id: number
    name: string
}

// This is where the code to fetch the data should live (e.g. db, external endpoint)
// Since this is only a code sample, we are mocking the data

const users : User[] = [
    {
        id: 1,
        name: "Mario"
    },
    {
        id: 2,
        name: "Luigi"
    },
    {
        id: 3,
        name: "Peach"
    },
    {
        id: 4,
        name: "Yoshi"
    },
    {
        id: 5,
        name: "Toad"
    }
];

async function mockGetUsers () : Promise<User[]> {
    return Promise.resolve(users);
}

export const getAllUsers = async () : Promise<User[]> => {
    return await mockGetUsers();
}

export const getName = async (id : number) : Promise<string> => {
    const users = await mockGetUsers() as User[];
    const user = users.find((user) => user.id === id);
    if (user) {
        return user.name;
    }
    throw new Error("Could not find user");
};
