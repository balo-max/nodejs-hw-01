import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        const count = contacts.length;

        if (count === 0) {
            console.log(`Contacts are empty.`);
            return count;
        } else if (count === 1) {
            console.log(`Found ${count} contact.`);
            return count;
        }

        console.log(`Found ${count} contacts.`);
        return count;
    } catch (err) {
        console.log(err);
    }
};

console.log(await countContacts());
