"use client";

import "@/style/members.scss"
import MemberCard from "@/components/MemberCard";
// import members from "@/data/members";
import parser from "js-yaml";
import { useEffect, useState } from "react";
import { Member } from "@/types/member";

export default function Members() {
  const [members, setMembers] = useState<Member[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [activeMembers, setActiveMembers] = useState<Member[]>([]);

  useEffect(() => {
    // read data/members.yml file from  root directory
    fetch("/data/members.yml")
      .then((response) => response.text())
      .then((text) => {
        const data: any = parser.load(text);
        console.log(`data: ${JSON.stringify(data)}`);
        setMembers(data.members);
        setActiveMembers(data.members);
      });
  }, []);

  const handleFilter = (filter: string) => {
    setFilter(filter);
    if (filter === "") {
      setActiveMembers(members);
    } else {
      setActiveMembers(members.filter((member) => member.categories?.includes(filter)));
    }
  }
  return (
    <div id="members" className="section">
      <h1 className="title">Members</h1>
      <div className="filters">
        <button className={"filter-button " + (filter === "" ? "active" : "")} onClick={() => handleFilter("")}>All</button>
        <button className={"filter-button " + (filter === "leadership" ? "active" : "")} onClick={() => handleFilter("leadership")}>Leadership</button>
        <button className={"filter-button " + (filter === "competitive" ? "active" : "")} onClick={() => handleFilter("competitive")}>Competitive</button>
        <button className={"filter-button " + (filter === "product design" ? "active" : "")} onClick={() => handleFilter("product design")}>Product Design</button>
      </div>
      <div className="members-grid">
       { activeMembers.map((member) => {
        return <MemberCard key={member.name} member={member} />
      })}
      </div>

    </div>
  )
}
