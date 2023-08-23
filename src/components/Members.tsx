import members from "@/data/members";
import "@/style/members.scss"
import MemberCard from "@/components/MemberCard";

export default function Members() {
  return (
    <div id="members" className="section">
      <h1 className="title">Members</h1>
      <div className="members-grid">
       { members.map((member) => {
        return <MemberCard key={member.name} member={member} />
      })}
      </div>

    </div>
  )
}
