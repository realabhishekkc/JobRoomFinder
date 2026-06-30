/**
 * Seed data (§5). Gives the board a lived-in feel in dev: one admin, a handful
 * of verified members, ~12 realistic posts across Sydney + Melbourne suburbs,
 * one active sponsor, and two boosted posts.
 *
 * Copy is written the way a real community member would write it — short,
 * direct, a little informal, with light Nepali where it's natural.
 */
import { PrismaClient, type PostType, type ContactMethod } from "@prisma/client";

const prisma = new PrismaClient();

const DAY = 24 * 60 * 60 * 1000;
const now = Date.now();
const daysAgo = (n: number) => new Date(now - n * DAY);
const inDays = (n: number) => new Date(now + n * DAY);

async function main() {
  // Clean slate, FK-safe order.
  await prisma.boost.deleteMany();
  await prisma.report.deleteMany();
  await prisma.savedPost.deleteMany();
  await prisma.postAlert.deleteMany();
  await prisma.moderationFlag.deleteMany();
  await prisma.post.deleteMany();
  await prisma.sponsor.deleteMany();
  await prisma.user.deleteMany();

  const admin = await prisma.user.create({
    data: {
      phone: "+61400000001",
      displayName: "JobRoomFinder Admin",
      role: "admin",
      status: "active",
      preferredLang: "en",
    },
  });

  // Members who author the posts.
  const members = await Promise.all(
    [
      { phone: "+61411222333", displayName: "Sushma" },
      { phone: "+61422333444", displayName: "Bishal" },
      { phone: "+61433444555", displayName: "Anjali" },
      { phone: "+61444555666", displayName: "Prakash" },
      { phone: "+61455666777", displayName: "Niraj" },
      { phone: "+61466777888", displayName: "Sita" },
    ].map((m) =>
      prisma.user.create({ data: { ...m, status: "active", preferredLang: "en" } })
    )
  );
  const by = (i: number) => members[i % members.length].id;

  type Seed = {
    type: PostType;
    authorIdx: number;
    title: string;
    description: string;
    suburb: string;
    state: string;
    contactMethod: ContactMethod;
    contactValue: string;
    ageDays: number;
    // job
    payRate?: string;
    payType?: "hourly" | "weekly" | "fixed";
    // room
    weeklyRentCents?: number;
    roomType?: "private" | "shared" | "master" | "granny_flat";
    billsIncluded?: boolean;
  };

  const seeds: Seed[] = [
    {
      type: "job",
      authorIdx: 0,
      title: "Kitchen hand needed, Harris Park (weekends)",
      description:
        "Busy Nepali restaurant on Wigram St. Need a reliable kitchen hand for Saturday and Sunday. Will train, just come on time and work clean. Cash + super, paid weekly.",
      suburb: "Harris Park",
      state: "NSW",
      contactMethod: "phone",
      contactValue: "+61411222333",
      ageDays: 2,
      payRate: "$28/hr",
      payType: "hourly",
    },
    {
      type: "room",
      authorIdx: 1,
      title: "Private room in Rockdale, 5 min walk to station",
      description:
        "One private room free in a clean 3-bedroom unit. Sharing with two working Nepali guys, very quiet. Furnished, fast wifi. Bond is two weeks. Available now.",
      suburb: "Rockdale",
      state: "NSW",
      contactMethod: "whatsapp",
      contactValue: "+61422333444",
      ageDays: 0,
      weeklyRentCents: 23000,
      roomType: "private",
      billsIncluded: true,
    },
    {
      type: "job",
      authorIdx: 2,
      title: "Cleaners for office buildings, Parramatta (early mornings)",
      description:
        "Looking for two people for office cleaning, 5am to 8am, Monday to Friday. Near Parramatta station. Good if you study during the day. Must have own travel.",
      suburb: "Parramatta",
      state: "NSW",
      contactMethod: "viber",
      contactValue: "+61433444555",
      ageDays: 4,
      payRate: "$30/hr",
      payType: "hourly",
    },
    {
      type: "room",
      authorIdx: 3,
      title: "Master room with own bathroom, Auburn",
      description:
        "Big master room with attached bathroom in a house. Suit a couple or one person who wants space. House is close to Auburn shops and the mosque. Bills shared, internet included.",
      suburb: "Auburn",
      state: "NSW",
      contactMethod: "phone",
      contactValue: "+61444555666",
      ageDays: 6,
      weeklyRentCents: 32000,
      roomType: "master",
      billsIncluded: false,
    },
    {
      type: "job",
      authorIdx: 4,
      title: "Aged care support workers, Western Sydney",
      description:
        "Aged care provider hiring support workers. Cert III in Individual Support needed, plus police check. Day and night shifts going. Sponsorship not available, sorry.",
      suburb: "Blacktown",
      state: "NSW",
      contactMethod: "phone",
      contactValue: "+61455666777",
      ageDays: 1,
      payRate: "$34/hr",
      payType: "hourly",
    },
    {
      type: "room",
      authorIdx: 5,
      title: "Share room for one student, Kingsford",
      description:
        "One bed free in a share room, near UNSW and the buses to the city. Good for a student on a budget. Quiet house, no parties. Rent includes everything.",
      suburb: "Kingsford",
      state: "NSW",
      contactMethod: "whatsapp",
      contactValue: "+61466777888",
      ageDays: 3,
      weeklyRentCents: 16000,
      roomType: "shared",
      billsIncluded: true,
    },
    {
      type: "job",
      authorIdx: 1,
      title: "Delivery riders, Melbourne CBD — own bike",
      description:
        "Need riders for food delivery around the CBD and Carlton. Busy on weekends, you keep your tips. Must have your own e-bike or scooter and the right visa to work.",
      suburb: "Melbourne",
      state: "VIC",
      contactMethod: "viber",
      contactValue: "+61411222333",
      ageDays: 5,
      payRate: "negotiable",
      payType: "fixed",
    },
    {
      type: "room",
      authorIdx: 2,
      title: "Granny flat for rent, Tarneit",
      description:
        "Self-contained granny flat at the back of our house. One bedroom, own kitchen and bathroom. Suit a couple. Separate entrance, very private. Available from next month.",
      suburb: "Tarneit",
      state: "VIC",
      contactMethod: "phone",
      contactValue: "+61422333444",
      ageDays: 7,
      weeklyRentCents: 38000,
      roomType: "granny_flat",
      billsIncluded: false,
    },
    {
      type: "job",
      authorIdx: 3,
      title: "Weekend grocery shop helper, Footscray",
      description:
        "Small Nepali-Indian grocery needs a hand on weekends. Stacking shelves, helping customers, a bit of Nepali and English needed. Friendly place, regular hours.",
      suburb: "Footscray",
      state: "VIC",
      contactMethod: "phone",
      contactValue: "+61433444555",
      ageDays: 2,
      payRate: "$26/hr",
      payType: "hourly",
    },
    {
      type: "room",
      authorIdx: 4,
      title: "Private room in Clayton, near Monash",
      description:
        "Furnished private room in a townhouse, walk to Monash Clayton and the bus loop. Sharing with two students. Clean kitchen, washing machine, good heating for winter.",
      suburb: "Clayton",
      state: "VIC",
      contactMethod: "whatsapp",
      contactValue: "+61444555666",
      ageDays: 1,
      weeklyRentCents: 21000,
      roomType: "private",
      billsIncluded: true,
    },
    {
      type: "job",
      authorIdx: 5,
      title: "Experienced cook for Nepali restaurant, Adelaide",
      description:
        "We need a cook who knows Nepali and Indian food well — momo, curry, tandoor a bonus. Full time, weekly pay. Long term position for the right person.",
      suburb: "Adelaide",
      state: "SA",
      contactMethod: "phone",
      contactValue: "+61466777888",
      ageDays: 8,
      payRate: "$1,200/week",
      payType: "weekly",
    },
    {
      type: "room",
      authorIdx: 0,
      title: "Room in family home, Truganina — couple welcome",
      description:
        "One room free in a quiet family home. We are a small Nepali family, so it suits someone who likes a calm place. Home-cooked smell most evenings. Couple is fine.",
      suburb: "Truganina",
      state: "VIC",
      contactMethod: "viber",
      contactValue: "+61411222333",
      ageDays: 0,
      weeklyRentCents: 26000,
      roomType: "master",
      billsIncluded: true,
    },
  ];

  const posts = [];
  for (const s of seeds) {
    const created = daysAgo(s.ageDays);
    const post = await prisma.post.create({
      data: {
        type: s.type,
        authorId: by(s.authorIdx),
        title: s.title,
        description: s.description,
        suburb: s.suburb,
        state: s.state,
        contactMethod: s.contactMethod,
        contactValue: s.contactValue,
        createdAt: created,
        expiresAt: new Date(created.getTime() + 30 * DAY),
        viewCount: Math.floor(Math.random() * 220) + 12,
        payRate: s.payRate ?? null,
        payType: s.payType ?? null,
        weeklyRentCents: s.weeklyRentCents ?? null,
        roomType: s.roomType ?? null,
        billsIncluded: s.billsIncluded ?? null,
      },
    });
    posts.push(post);
  }

  // One active sponsor (home top banner).
  await prisma.sponsor.create({
    data: {
      businessName: "Everest Migration & Education",
      contactEmail: "hello@everestmigration.example",
      websiteUrl: "https://example.com/everest",
      tagline:
        "Student visas, skills assessments, PR pathways. Nepali-speaking team in Sydney.",
      logoUrl: null,
      bannerImageUrl: null,
      status: "active",
      placement: "home_top_banner",
      startsAt: daysAgo(1),
      endsAt: inDays(6),
    },
  });

  // Two boosted posts (Promoted), active for +3 days.
  const boosted = [posts[1], posts[4]]; // Rockdale room + aged care job
  for (const p of boosted) {
    await prisma.boost.create({
      data: {
        postId: p.id,
        status: "active",
        startsAt: daysAgo(0),
        endsAt: inDays(3),
        stripeSessionId: `seed_${p.id}`,
      },
    });
  }

  console.log(
    `Seeded: 1 admin, ${members.length} members, ${posts.length} posts, 1 sponsor, ${boosted.length} boosts.`
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
