import ContactsCard from "../components/contacts-card";
import { contactsData } from "../data";
import { Contact } from "../types";
import "./css/contact.css";

export default function Contacts() {
    return (
        <div id="contact">
            <div id="contact-header">
                <h1>CONTACT ME:</h1>
            </div>
            <div id="contact-container"></div>
            {contactsData.map((contact: Contact, index: number) => (
                <ContactsCard key={index} contact={contact} />
            ))}
        </div>
    );
}
