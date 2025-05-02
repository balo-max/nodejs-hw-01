import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();

        if (contacts.length === 0) {
            console.log("Contacts are empty.");
            return;
        }

        const removedContact = contacts.pop();
        await writeContacts(contacts);

        console.log(`Delete contact "${removedContact.name}" success`);
    } catch (err) {
        console.log(err);
    }
};

removeLastContact();
