import Image from "next/image";
import "@/style/members.scss"
import { Member } from "@/types/member";


export default function MemberCard(props: any) {
  const { member } = props
  return (
    <div className="member-card">
      <div className="member-image">
        <Image
          src={member.image || "/unknown.png"}
          fill={true}
          // width={200}
          // height={300}
          alt={member.name || "Anonymous"}
        />
      </div>
      <div className="member-info">
          <a href={member.link}>
            <h3 className="member-name">{member.name || "Anonymous"}</h3>
            { member.role && <p className="member-role">{member.role}</p> }
          </a>
      </div>
    </div>
  )
}
