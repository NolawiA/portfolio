import React from "react";
import { Contact } from "../types";
import "./css/skill-card.css";

interface ContactsCardProps {
    contact: Contact;
};

const ContactsCard: React.FC<ContactsCardProps> = ({ contact }) => {
    return (
        <div className="contacts-card">
            <div id="contacts-card-image">
                <img src={"/devicons/" + contact.image} alt="Dev Icon" />
            </div>
            <div id="contacts-card-header">
                <h3>{contact.method}</h3>
            </div>
        </div>
    );
};

export default ContactsCard;
