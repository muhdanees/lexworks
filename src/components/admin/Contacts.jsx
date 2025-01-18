import { EnvelopeIcon, HashtagIcon, LinkIcon, PencilIcon, PhoneIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Contacts({ API_URL }) {
  const [contacts, setContacts] = useState([]);

  const getAllContacts = async () => {
    const res = await fetch(`${API_URL}/contact`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
    setContacts(res.contacts);
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <section>
      <div className="mt-10">
        <div className="mt-4">
          {contacts.map((contact, index) => (
            <div
              className="w-full mb-4 bg-white border border-gray-200 rounded-lg shadow p-2"
              key={`${contact.name}-${index}`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2"><UserCircleIcon className="size-4" /> Name: {contact.name}</div>
                <div className="flex items-center gap-2"><EnvelopeIcon className="size-4" /> Email: {contact.email}</div>
                <div className="flex items-center gap-2"><PhoneIcon className="size-4" /> Phone: {contact.phone}</div>
              </div>
              <div className="mt-2 flex gap-2 items-center">
               <HashtagIcon className="size-4" /> Subject: {contact.subject}
              </div>
              <div className="mt-2 flex gap-2 items-center">
               <PencilIcon className="size-4" /> Description: {contact.description}
              </div>
              <div className="mt-2">
                <a className="text-blue-600 flex items-center gap-2" target="_black" href={contact.image}><LinkIcon className="size-4" /> Document</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
