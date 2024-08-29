import { SkillsList } from "@/entities/job";

interface Props {
  skills: SkillsList[];
}

export default function JobSkills(props: Props) {
  return (
    <div className="flex items-center gap-x-2 text-sm text-gray-600">
      {props.skills &&
        props.skills.map((skill) =>
          <span
            key={skill.id}
            className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
          >
              {skill.name}
            </span>
        )}
    </div>
  );
}
