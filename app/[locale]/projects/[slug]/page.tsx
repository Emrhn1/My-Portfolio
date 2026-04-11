// app/[locale]/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import ProjectDetailClient from './ProjectDetailClient';
import { projects } from '@/app/projects';

export async function generateStaticParams() {
  const locales = ['tr', 'en'];
  return locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

const baseUrl = 'https://emirhan-erkan.vercel.app';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Proje Bulunamadı' };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/projects/${slug}`,
      languages: {
        tr: `${baseUrl}/tr/projects/${slug}`,
        en: `${baseUrl}/en/projects/${slug}`,
      },
    },
    openGraph: {
      title: `${project.title} | Emirhan Erkan`,
      description: project.description,
      url: `${baseUrl}/${locale}/projects/${slug}`,
      images: [{ url: project.image, width: 800, height: 600, alt: project.title }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
