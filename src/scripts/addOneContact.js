import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const currentContacts = await readContacts();
        const contact = [createFakeContact()];
        const newContacts = currentContacts.concat(contact);
    
        await writeContacts(newContacts);
        console.log(`Add one new contact "${contact[0].name}"`);
    } catch (err) {
        console.log(err);
    }
   
};

addOneContact();
