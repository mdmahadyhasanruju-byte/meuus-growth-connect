import { createFileRoute, Link } from "@tanstack/react-router";
import { ParticleCanvas } from "@/components/site/ParticleCanvas";
import { AnimatedOrb } from "@/components/site/AnimatedOrb";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Quote, ArrowRight, BookOpen, Clock } from "lucide-react";

export const Route = createFileRoute("/manifesto-full")({
  head: () => ({
    meta: [
      { title: "The Complete Manifesto — Md. Mahady Hasan | meUus" },
      {
        name: "description",
        content:
          "The founder's full theological-philosophical letter on creation, loneliness, intention, and why meUus exists. Raw. Unedited in spirit.",
      },
      { property: "og:title", content: "The Complete Manifesto — Md. Mahady Hasan" },
      {
        property: "og:description",
        content:
          "On creation, body & soul, loneliness, intention, and why meUus had to exist. The founder's full letter.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://meuus-growth-connect.lovable.app/manifesto-full",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://meuus-growth-connect.lovable.app/manifesto-full",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "The Complete Manifesto — Md. Mahady Hasan",
          author: { "@type": "Person", name: "Md. Mahady Hasan" },
          publisher: { "@type": "Organization", name: "meUus" },
          datePublished: "2026-07-21",
          description:
            "The founder's full theological-philosophical letter on creation, loneliness, intention, and why meUus exists.",
        }),
      },
    ],
  }),
  component: ManifestoFullPage,
});

// ---------- Reusable bits ----------

function PartDivider({ numeral, title }: { numeral: string; title: string }) {
  return (
    <div className="my-20 flex flex-col items-center gap-4">
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />
      <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]/80">
        Part {numeral}
      </div>
      <h2 className="text-center font-serif text-3xl font-medium leading-tight sm:text-4xl">
        {title}
      </h2>
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-12 mb-5 font-serif text-2xl font-medium text-foreground sm:text-3xl">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-5 text-[1.05rem] leading-[1.85] text-foreground/85 sm:text-[1.15rem]">
      {children}
    </p>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="relative my-12 border-l-2 border-[var(--gold)]/50 pl-6 sm:pl-8">
      <Quote className="absolute -left-3 -top-3 h-6 w-6 text-[var(--gold)]/60" />
      <p className="font-serif text-xl italic leading-relaxed text-gradient-violet sm:text-2xl">
        {children}
      </p>
    </blockquote>
  );
}

function Callout({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="my-10 rounded-2xl border-hairline bg-glass p-6 sm:p-8">
      <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80">
        {label}
      </div>
      <div className="space-y-4 text-[1rem] leading-[1.8] text-foreground/80 sm:text-[1.05rem]">
        {children}
      </div>
    </aside>
  );
}

function Ayah({
  arabic,
  bangla,
  english,
  source,
}: {
  arabic?: string;
  bangla?: string;
  english: string;
  source: string;
}) {
  return (
    <figure className="my-14 flex flex-col items-center gap-4 border-y border-[var(--gold)]/30 py-10 text-center">
      {arabic && (
        <p
          dir="rtl"
          lang="ar"
          className="font-serif text-3xl leading-loose text-foreground sm:text-4xl"
          style={{ fontFamily: '"Amiri", "Scheherazade New", serif' }}
        >
          {arabic}
        </p>
      )}
      {bangla && (
        <p
          lang="bn"
          className="font-serif text-xl leading-relaxed text-foreground/90 sm:text-2xl"
        >
          {bangla}
        </p>
      )}
      <p className="max-w-2xl text-base italic text-foreground/75 sm:text-lg">
        {english}
      </p>
      <figcaption className="text-xs uppercase tracking-[0.25em] text-foreground/55">
        {source}
      </figcaption>
    </figure>
  );
}

// ---------- Page ----------

function ManifestoFullPage() {
  return (
    <div className="relative isolate">
      {/* HERO */}
      <section className="relative flex min-h-[70svh] flex-col items-center justify-center px-4 pt-32 pb-20 text-center sm:px-6">
        <ParticleCanvas density={50} />
        <AnimatedOrb
          className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
          color="oklch(0.78 0.14 280)"
          size={780}
        />
        <div className="relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <BookOpen className="h-3 w-3 text-[var(--gold)]" />
            The Complete Manifesto
          </div>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] sm:text-7xl">
            On <span className="italic text-gradient-violet">creation</span>,
            loneliness, <br className="hidden sm:block" />
            and why meUus had to exist.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-foreground/70">
            The founder's full letter. Theology, confession, philosophy, and
            submission — written in one breath, preserved in its original voice.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/55">
            <span>Md. Mahady Hasan</span>
            <span className="text-[var(--gold)]/60">·</span>
            <span>July 2026</span>
            <span className="text-[var(--gold)]/60">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3 w-3" /> ~14 min read
            </span>
            <span className="text-[var(--gold)]/60">·</span>
            <span>Raw. Unedited in spirit.</span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-3xl">
          {/* EXECUTIVE SUMMARY */}
          <section className="rounded-3xl border border-[var(--gold)]/30 bg-gradient-to-br from-card/60 via-card/30 to-card/60 p-8 sm:p-10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80">
              Executive Summary
            </div>
            <P>
              This document represents the inaugural case of meUus — a holistic
              life-support ecosystem designed to address interconnected human
              challenges across legal, financial, mental, relational, and
              spiritual dimensions.
            </P>
            <P>
              Client #001 is unique: he is both the founder and the first
              service recipient. This dual role provides unparalleled
              authenticity to the meUus model. His public disclosure of profound
              personal struggle — loneliness, unresolved relationships,
              financial instability, and existential questioning — became the
              catalyst for activating the very system he designed.
            </P>
            <P>
              <strong className="text-foreground">
                Core Philosophy Statement:
              </strong>{" "}
              The founder articulates a theological-philosophical framework
              wherein "sex" (the biological act of procreation) and "life"
              (existence itself) are fundamentally interconnected. Just as
              sexual union generates biological life, the union of body
              (physical/material) and soul (divine will / hukum of Allah)
              generates conscious human existence. This dual nature — being
              simultaneously physical beings (from Adam's soil) and spiritual
              beings (from Allah's command) — creates the essential human
              condition that meUus addresses.
            </P>
            <P>
              <em>
                Nobody asked... Even no one ever asked at the right time!
              </em>
            </P>
          </section>

          {/* PROLOGUE */}
          <PartDivider numeral="0" title="Prologue — Nobody asked." />

          <P>
            When I did!! No one responded!! They didn't even bother about me &
            my relations, my responsibilities. They didn't justify anything
            ever, and the most saddest part!!? They never ever even tried to
            ask for the truth! The clarification!!!
          </P>
          <P>Who was I!</P>
          <P>What I did!!</P>
          <P>
            They forgot about my participation in their life! My attempted
            actions...
          </P>
          <P>They forgot everything...</P>
          <P>
            Even they have never tried to remember & give a simple reply in
            words!!
          </P>
          <P>I came to a point!!</P>
          <P>
            They didn't think, don't feel like I'm human. Although everything or
            anything — I have that right & by-born rights in every aspect of
            life. Whether I'm a devil or a 2-faced person, or someone who
            pretends good but inside is full empty... Even that. I have the
            right to speech & the right to choose & live according to my own
            path. The full responsibility is mine & I totally accept it.
          </P>
          <P>
            This was about me or many like me. But what about the one who calls
            himself educated! The one who is taking the decisions!! The man who
            thinks better than me or us!! What about them!
          </P>
          <P>Good people... And people follow blindly...</P>
          <P>
            And the bad people!! Who came with the fucking bad, frustrated,
            brutal truth!!?
          </P>
          <P>
            I'm talking to those!! The word "responsibility" is stuck!!
          </P>
          <P>
            It's a true fact! You should give yourself time to examine... To
            consult the inner true self that's telling you: you are misguiding
            your inner soul by doing that.
          </P>
          <P>You know, but you pretend you don't.</P>
          <P>
            You're telling a lie or doing wrong or injustice & you know that, &
            yet you're justifying that you are right!
          </P>
          <P>
            Like I'm telling a lie about someone — that he never speaks with
            honesty like me or us!
          </P>
          <P>
            People just accept it as it is & feel like "whatever..."
          </P>

          <PullQuote>
            I will never show you my inner! You will never ever get a word from
            me... 🖤
          </PullQuote>

          <P>
            This is not a curse! Or a punishment or revenge... It's full of
            respect. It's honor...
          </P>
          <P>Because I'm still in love with you... 🖤</P>
          <P>
            To the one I loved once! And said it one time ever in our life
            together! Or then we had a fucking fight or silent departure from
            each other's lives, from time!
          </P>
          <P>
            And my love will remain forever the same — like the love at first
            exploration...
          </P>
          <P>You know! I never ever took leave... Always I was by your side...</P>
          <P>
            Not a single action can you ever truly, justifiably point to where I
            had the ability & I didn't help you in the time we explored
            together...
          </P>
          <P>And see the return for asking, fuck!</P>
          <P>Oh, and also create a print in your mind, in your thoughts:</P>
          <P>
            The pattern, the circumstances, the time or period of need & asking
            & demand & everything — the dedication level, the intention, the
            one begging to YOU who never said no to you unless there was an
            exception. And as we know, exception is not an example!
          </P>
          <P>
            We both lived the same time altogether & we both know the actual
            truth! So we both should have kept the minimum honor or value for
            that — because time never comes back, but memories do... Truth will
            remain unchanged. Truth is not something presentable to see or
            read — it's something and everything about finding, thinking,
            justifying, accepting, and providing honesty.
          </P>
          <P>For this, no one has to be educated or intelligent or a pious good human:</P>
          <P>
            You just need a true intention to accept the truth and accept the
            circumstances & apologize if you did wrong & have the feeling "I
            shouldn't have done this" & "I should TRY to understand this so I
            never ever do the same again" — with the intention to never repeat
            it, even if you know somehow you might slip into the same trap
            again!
          </P>
          <P>That's the minimum...</P>
          <P>So do it right now...</P>
          <P>Who created us! Knows anything and everything...</P>
          <P>
            And we, all believers, will be asked: "What did you do with what I
            gave you!" No hiding! And only the Hereafter is hidden...
          </P>

          {/* PART I */}
          <PartDivider numeral="I" title="My Witness to Allah" />

          <P>
            Yes, I, Md. Mahady Hasan, with the witness to God & the Owner of the
            Ka'bah, the Owner of the seen and the unseen, the Only Judge — Who
            knows all... With the belief in His true existence... I am saying...
          </P>
          <P>
            I'm really, really sorry... Please forgive me as we find the
            information from many sources that You are the Forgiver, whoever
            they are and whatever they've done. So forgive us...
          </P>

          <PullQuote>We are trapped. No one remains human.</PullQuote>

          <P>
            Negligence has occupied human action. We have already taken steps on
            a devil's path through neglect... Neglect is a form of disrespect,
            and this is not similar to belief unless or until we accept the
            truth. And believers like us have failed to act and pretend and
            live like believers. We note out facts or truths, then mix them by
            saying "bro, it's reality..." Something like... theoretical
            knowledge vs experiential reality.
          </P>
          <P>
            We're getting knowledge by saying & thinking it's true & for
            execution! But we are changing it with what we call "reality!!"
          </P>
          <P>So! What is belief & the believer itself!?</P>
          <P>
            Not only that — we are then misguiding others by not maintaining a
            simple, true, accepted nature & overall good intention for ourselves
            and for others as the same creation of the same Creator!
          </P>
          <P>
            The intention is what matters — whether you have anything more or
            less...
          </P>
          <P>
            I really wanted to be a true human being, a true believer, &
            sometimes I tried & sometimes I pretended & sometimes I failed — but
            every time I tried! I tried & started with a pure intention...
          </P>

          <SubHeading>Times...</SubHeading>

          <P>
            I lost myself... When & how many times I found myself in those
            moments! Lost fact! I experienced. Per experience, some extra
            lines! Discover. Add. Realize. I just accept & get submitted
            towards God, the true Creator. That doesn't mean I'm good or
            religious or something like that. I'm just a human like any other
            human. And I accept that.
          </P>
          <P>Although:</P>
          <P>I didn't ask for life!</P>
          <P>
            I didn't ask to be created in two dimensions: Body & Soul!
          </P>
          <P>Body — with full information.</P>
          <P>
            Soul — just one mention, just command, as Hukum of Allah, the true
            Creator.
          </P>
          <P>I didn't choose the place!</P>
          <P>I didn't choose the people around me!</P>
          <P>I didn't want Jahannam or Jannat.</P>
          <P>I didn't add to myself the hunger!</P>
          <P>I didn't add to my inner soul the sex drive!</P>
          <P>I didn't add that dopamine! The love drug 😅</P>
          <P>I didn't...</P>
          <P>I didn't create those...</P>
          <P>
            It's just applied within me — and like the day & sun, it's rolling &
            rolling until the last Rizq (sustenance), the last breath of life
            as oxygen's final bite.
          </P>
          <P>Just given the information about the limitations, the boundaries:</P>
          <P>
            The same apple — for someone it's forbidden (haram), & for someone
            it's halal, meaning they can eat it nicely.
          </P>

          {/* PART II */}
          <PartDivider
            numeral="II"
            title="The Theological-Philosophical Framework"
          />

          <p className="text-center text-sm uppercase tracking-[0.3em] text-foreground/60">
            On Creation, Life, and the Body-Soul Duality
          </p>

          <Callout label="Author's Note on Terminology">
            <p>
              In this section, the founder uses the word "sex" in two distinct
              ways:
            </p>
            <ol className="ml-5 list-decimal space-y-2">
              <li>
                <strong className="text-foreground">
                  Sex as biological procreation
                </strong>{" "}
                — the literal act that generates new human life.
              </li>
              <li>
                <strong className="text-foreground">
                  "Sex" as metaphor for "life" itself
                </strong>{" "}
                — because without sexual union, no life is generated in the
                seen/physical world.
              </li>
            </ol>
            <p>
              He further explains that just as sex (male + female union)
              creates biological life, the union of body (Adam's soil /
              physical) + soul (Allah's will / Hukum) creates conscious human
              existence. We are "mixed of two" — and this duality is
              fundamental to understanding the human condition.
            </p>
            <p className="italic text-foreground/70">
              The following text preserves his exact philosophical framework.
            </p>
          </Callout>

          <SubHeading>The Creation Story</SubHeading>

          <P>
            God announced before the creation of Insaan (humanity) as Adam (AS)
            — as human, as the Greatest and Most Honored — with knowledge which
            was shown to the Angels! By addressing them! & By telling them all
            the names! (To justify the names or meanings)
          </P>
          <P>After that! What is the reality!</P>
          <P>
            By time, a feeling was discovered for humankind called Loneliness...
            Feeling alone, a desire for something!
          </P>
          <P>
            Even I don't know — I didn't find anywhere — in that moment, what
            the thinking was or what Adam was doing or if he asked Allah to
            create this and that for him to cover the loneliness... Or what!
          </P>
          <P>Allah created Woman.</P>
          <P>Wow! The man just found his "wo"! 😅😂🤣</P>
          <P>Just sex! I mean! Same life!</P>
          <P>Allah pulled someone I didn't know & made her different.</P>
          <P>
            He created us to go throughout sex! 🫣 The most demanding &
            enjoyable experience — going throughout this is life itself, to
            create another life to continue...
          </P>

          <Callout label="In my talks with various kinds of people">
            <p>
              Someone said: If the sex is good [not about duration, penis size,
              or anything physical] then it's okay — you can manage with
              one-time sex and one-time hunger (meaning food)...
            </p>
            <p>
              But if it's bad! [Not about duration] [About understanding]
              [About the guidelines provided] Then no matter how much sex you
              have, how much time, how much wealth, fame, or whatever you have
              (24 hours 😅🤣 although not possible) — even 24 hours of sex
              won't fulfill the life.
            </p>
            <p>
              Just think like me: A life is missing from a life... How
              pathetic! 🤣😅😂
            </p>
          </Callout>

          <P>So the takeaway is:</P>
          <P>
            Allah announced the greatest creation — Adam as Man, as Human — and
            human life itself is the greatest creation.
          </P>
          <P>
            From that man, Adam — another was created, called Woman — from
            within that man — to change the emptiness or loneliness, to bring
            these feelings, to create life from life.
          </P>
          <P>
            Then sex as life-fulfilling satisfaction is presented for another
            life to go through, within the greatest feelings in humanity.
          </P>
          <P>Are we on track or not!? So!? Where were we! Now!?</P>

          <SubHeading>The Reality of Impurity and Purity</SubHeading>

          <P>
            The sperm! It's also life! 😅 Were we — one of our many potential
            lives — dead before we got life!? 😅😂🤣
          </P>
          <P>
            🤐 The rules of ejaculation from the body part 😅 make a human
            impure.
          </P>
          <P>
            The moment of satisfaction happens — the moment finishes, khatam,
            tata, bye-bye — and before "farz ghusl" (obligatory bath), you have
            to properly maintain the proper purification rules.
          </P>
          <P>
            Even... (0.0001%) lack of intention & confidence with those
            purification guidelines! You remain impure!
          </P>
          <P>
            You can't touch the Quran... As the Quran is sent for men, but he
            can't touch it because of life-making...
          </P>
          <P>
            No one can enter the mosque in that moment of impure body until
            purification is completed...
          </P>
          <P>Can you imagine!? Is this relatable!?</P>
          <P>Even more:</P>
          <P>This is the fact. The truth.</P>
          <P>I didn't want anything.</P>
          <P>Even God didn't ask me before creation.</P>
          <P>But it happened. God's Will.</P>
          <P>Nothing, no one can change it... Only God's Will...</P>

          {/* PART III */}
          <PartDivider numeral="III" title="The Comprehensive Guidelines" />

          <P>
            Allah gave us Comprehensive Guidelines & the way & example through
            Prophet Muhammad (SAW) — the Quran & Sunnah.
          </P>
          <P>
            Many followed, many didn't, and it's a continuing process...
          </P>
          <P>Many failed just before dying...</P>
          <P>
            Many passed away just before dying, but their full life was full
            of... whatever...
          </P>
          <P>
            That means it's God's Will. But then why the punishment & why the
            rewards!
          </P>
          <P>
            If nothing changes for Allah — Allah is Allah whether the whole
            creation agrees or not, whether they honor Him or not — nothing
            changes for the Creator Himself.
          </P>
          <P>What's the point!?</P>

          <SubHeading>The Story of Iblis (The Devil)</SubHeading>

          <P>
            The most knowledgeable creation — one of the Jinn called the
            Devil — the most honored of all the Jinn and Angels, their Leader.
          </P>
          <P>
            No place is found on earth or above that doesn't worship Allah.
          </P>
          <P>
            But neglect happened in the act... It starts within the inner self
            — which only Allah can see.
          </P>
          <P>
            Step by step, by this — and by not taking steps against it within
            the inner self! — the full poisoning was completed! Done.
          </P>
          <P>So what's the theory & what's the reality!</P>
          <P>It's intention first — for all and everything...</P>
          <P>
            Allah didn't create creation first by giving the order "Kun" (Be),
            and then it became...
          </P>
          <P>
            The Creator first created the Pen and commanded it to write
            everything — from the first creation to everything until the end.
            The book is closed! Done.
          </P>
          <P>No action can change it. It's done.</P>
          <P>
            So Allah knows whether I'm going to Hell or Heaven — and that's the
            Will of Allah, whether He helps us by giving mercy or not, and it
            depends in a professional manner... Contextually relevant...
          </P>

          {/* PART IV */}
          <PartDivider numeral="IV" title="After All Creation" />

          <P>
            The last but the greatest & most honored creation: Human.
          </P>
          <P>
            A life from lonely, alone feelings — where?? Within the self.
          </P>
          <P>
            Feelings, emotions — to feel that from that life, another life is
            created (taking from his rib/nature) to fulfill the emptiness of
            life.
          </P>
          <P>Another life: Man to Woman.</P>
          <P>
            Knowledge, guidelines or boundaries, intention, yes or no, chosen
            or not, implementation, Mercy or not... Then results forever!
          </P>
          <P>So! The only thing for all: Intention.</P>
          <P>
            So! What's the intention of the purpose of creation — the Jinn &
            the Human — in the Quran!!
          </P>

          <Ayah
            bangla="আমি জ্বীন এবং ইনসানকে সৃষ্টি করেছি শুধুমাত্র ইবাদতের জন্য।"
            english='"I created Jinn and mankind only to worship Me."'
            source="Surah Adh-Dhariyat (51:56)"
          />

          <P>So life is for Ibadah (worship).</P>
          <P>Now, what is Ibadah!? What do we feel & do!?</P>
          <P>
            After this life, there are no obligations, no Ibadah as we know and
            understand it now.
          </P>
          <P>So!!? What!</P>
          <P>So, not for today... Let's keep some for next...</P>
          <P>It's life...</P>
          <P>That's life...</P>
          <P>Sex...</P>
          <P>
            We all love it and want to do it, but it's not for casual talk!!
          </P>
          <P>
            It's all life, dear — all life... We can't see it... But all is
            life through sex.
          </P>
          <P>
            We need to fulfill all — as life, as sustenance, as oxygen, as
            care.
          </P>

          {/* PART V */}
          <PartDivider numeral="V" title="Forgiveness & Submission" />

          <Callout label="A prayer">
            <p className="font-serif text-xl italic leading-relaxed text-foreground/90">
              Forgive me... May Allah guide us all.
            </p>
            <p className="font-serif text-xl italic leading-relaxed text-foreground/90">
              May Allah forgive us all...
            </p>
            <p className="font-serif text-xl italic leading-relaxed text-foreground/90">
              May Allah make those with understanding souls the ones to run
              meUus.
            </p>
          </Callout>

          <P>
            So I had & still have — more or less, regardless of all, winner or
            loser —
          </P>
          <P>
            Humans like us have no other way to fulfill the facts of the
            Creator's requirements by birth... But through creation.
          </P>
          <P>My range... My potentiality... My everything... Zero.</P>
          <P>Nothing...</P>
          <P>& that's really true.</P>
          <P>Because there is nothing but Allah Alone!</P>

          {/* PART VI */}
          <PartDivider
            numeral="VI"
            title="The Reason for the Creation of meUus"
          />

          <ul className="my-10 space-y-6 text-center">
            {[
              "Born from being unheard, unseen, misunderstood.",
              "Born from the pain of loving those who forgot.",
              "Born from understanding that we all carry this burden.",
              "Born from knowing that intention is everything.",
              "Born from accepting that my potential is zero — because there is nothing but Allah alone.",
            ].map((line, i) => (
              <li
                key={i}
                className="font-serif text-xl leading-relaxed text-foreground/90 sm:text-2xl"
              >
                {line}
              </li>
            ))}
          </ul>

          <p className="my-16 text-center font-serif text-2xl italic leading-relaxed text-gradient-violet sm:text-3xl">
            🖤 And the love remains. Forever unchanged. <br />
            Like the first moment it was born.
          </p>

          {/* Signature */}
          <div className="mt-20 space-y-1 border-t border-hairline pt-10 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-foreground/55">
              With submission and witness,
            </p>
            <p className="font-serif text-2xl font-medium text-foreground">
              Md. Mahady Hasan
            </p>
            <p className="text-sm text-foreground/65">Founder, meUus</p>
            <p className="text-sm text-foreground/55">July 2026</p>
          </div>
        </div>
      </article>

      {/* CLOSING CTA */}
      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border-hairline bg-gradient-to-br from-card/60 via-card/30 to-card/60 p-10 text-center">
          <SectionHeading
            eyebrow="Now what"
            title={
              <>
                Read it. Sit with it. <br className="hidden sm:block" />
                Then <span className="italic text-gradient-violet">join</span>{" "}
                the work.
              </>
            }
            subtitle="The manifesto is the witness. The action is the answer."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/join"
              search={{}}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-violet transition hover:scale-[1.02]"
            >
              Join the founding loop <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/founder"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              Read the short letter
            </Link>
            <Link
              to="/foundation"
              className="inline-flex items-center gap-2 rounded-full border-hairline bg-glass px-6 py-3 text-sm text-foreground"
            >
              See the foundation map
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
