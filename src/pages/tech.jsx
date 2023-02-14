import Head from 'next/head';
import Link from 'next/link';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Jonathan Park</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, the joy of homelabbing, and other things I recommend."
        intro=""
      >
        <div className="space-y-20">
          <ToolsSection title="Homelab">
            <Tool title="14” MacBook Pro, M1 Pro, 32GB RAM (2021)">
              This is my daily driver. I was never a Mac user but I have been converted. These Apple
              silicon machines are on another level. If you want the cold hard numbers, check out{' '}
              <Link href="https://www.youtube.com/@AZisk">
                <span className="text-teal-500 dark:text-teal-400">Alex Ziskind’s </span>
              </Link>
              youtube channel. He benchmarks the Apple silicon machines from the point of view of a
              developer.
            </Tool>
            <Tool title="More to come..."></Tool>
          </ToolsSection>
          <ToolsSection title="Developer Workflow">
            <Tool title="Visual Studio Code">
              This IDE speaks for itself. Although I am having fun learning Vim.
            </Tool>
            <Tool title="Warp Terminal">
              <Link href="https://www.warp.dev/">
                <span className="text-teal-500 dark:text-teal-400">Warp</span>
              </Link>{' '}
              is a terminal reimagined (I took that from their website). But seriously, it’s a
              batteries included terminal that really speeds up your developer workflow in so many
              ways. Add on{' '}
              <Link href="https://starship.rs/">
                <span className="text-teal-500 dark:text-teal-400">Starship</span>
              </Link>{' '}
              prompt and you’ll never go back to a vanilla bash terminal.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Pen & Paper">
              You can’t beat the analog feels of writing something down with pen and paper. It’s the
              simplist way to get things done, without getting stuck in analysis paralysis.
            </Tool>
            <Tool title="Digital Timer">
              Pomodoros are a great way to stay focused and get things done. I’ve played around with
              different time intervals but I like to start the day with a 90 minute sprint of deep
              work before I take my first short break.
            </Tool>
            <Tool title="Supernotes">
              I find most productivity & note taking apps overwhelming. I like to keep things super
              simple, hence pen & paper being my go to for anything planning or note taking. But for
              when notes needs to be stored and easily accessible to recall in the future, I use{' '}
              <Link href="https://supernotes.app/">
                <span className="text-teal-500 dark:text-teal-400">Supernotes</span>
              </Link>
              . The system of card based notes is the most congntive friendly way to organize
              information.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  );
}
