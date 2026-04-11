import { MetadataRoute } from 'next';
import { projects } from './projects';

const baseUrl = 'https://emirhan-erkan.vercel.app';
const locales = ['tr', 'en'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Home pages
  locales.forEach((locale) => {
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          tr: `${baseUrl}/tr`,
          en: `${baseUrl}/en`,
        },
      },
    });
  });

  // Project pages
  projects.forEach((project) => {
    locales.forEach((locale) => {
      entries.push({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: {
            tr: `${baseUrl}/tr/projects/${project.slug}`,
            en: `${baseUrl}/en/projects/${project.slug}`,
          },
        },
      });
    });
  });

  return entries;
}
