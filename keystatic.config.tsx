import { config, fields, collection } from '@keystatic/core';
import { block } from '@keystatic/core/content-components';
import { ImageIcon } from 'lucide-react';
import { BlogImageNodeView } from './src/components/blog/BlogImageNodeView';
import { uploadBlogImage } from './src/lib/upload-blog-image';

const IMAGE_TYPES = new Set([
  'image/png',
  'image/jpeg',
  'image/gif',
  'image/webp',
  'image/svg+xml',
  'image/avif'
]);

export default config({
  storage: {
    kind: 'local'
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { isRequired: true }
        }),
        date: fields.date({
          label: 'Publish Date',
          validation: { isRequired: true }
        }),
        author: fields.text({
          label: 'Author',
          defaultValue: 'RipeText Team',
          validation: { isRequired: true }
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value
        }),
        cover: fields.text({
          label: 'Cover Image'
        }),
        draft: fields.checkbox({
          label: 'Draft',
          defaultValue: false,
          description: 'Draft posts are hidden from the blog index'
        }),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: false
          },
          components: {
            BlogImage: Object.assign(
              block({
                label: 'Blog Image',
                icon: <ImageIcon size={16} />,
                schema: {
                  src: fields.text({
                    label: 'Image URL',
                    description:
                      'Auto-filled when you upload an image. Do not clear this field.'
                  }),
                  alt: fields.text({ label: 'Alt Text' })
                },
                NodeView: BlogImageNodeView
              }),
              {
                handleFile: (file: File) => {
                  if (!IMAGE_TYPES.has(file.type)) return false;
                  return uploadBlogImage(file).then((url) => ({
                    src: url,
                    alt: ''
                  }));
                }
              }
            )
          }
        })
      }
    })
  }
});
