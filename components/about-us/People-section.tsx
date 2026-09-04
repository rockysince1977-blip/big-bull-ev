import Image from "next/image";

const team = [
  {
    name: "Deepak Gupta",
    role: "Director",
    photo:
      "https://www.bigbullerickshaw.in/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-27-at-11.54.37.jpeg",
    bio: "Dipak Gupta serves Big Bull as the Marketing and Operations Director, leading the organization's staff, board, and supporters to advance the company's mission. He oversees and directs marketing strategies and efforts to strengthen the company's market position and achieve desired business goals.",
  },
  {
    name: "Deepak Shaw",
    role: "Director",
    photo:
      "https://www.bigbullerickshaw.in/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-27-at-11.54.36.jpeg",
    bio: "Deepak Kumar Shaw serves Big Bull as the Sales Director, leading the sales process. He manages and oversees sales operations, develops and cultivates relationships with clients, and evaluates costs to determine product pricing when selling to customers.",
  },
];
const stats = [
  "High-octane solution",
  "R&D Wing",
  "Troubleshooting Solution",
  "Best Outcomes",
];

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat} className="rounded-2xl bg-zinc-100 p-6 md:p-8">
            <p className="text-4xl font-semibold tracking-tight">0%</p>
            <p className="mt-3 text-sm text-zinc-500">{stat}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section
      className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28"
      aria-labelledby="team-heading"
    >
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-600">
            The people behind the progress
          </p>
          <h2
            id="team-heading"
            className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl"
          >
            Our Team Members
          </h2>
        </div>
        <p className="max-w-sm text-zinc-500">
          However venture pursuit he am mr cordial. Forming musical am hearing
          studied be luckily.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {team.map((member) => (
          <article
            key={member.name}
            className="overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white"
          >
            <div className="relative aspect-[4/3] bg-zinc-100">
              <Image
                src={member.photo}
                alt={`${member.name}, ${member.role}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <span className="font-mono text-xs uppercase text-sky-600">
                  {member.role}
                </span>
              </div>
              <p className="mt-4 leading-7 text-zinc-600">{member.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
