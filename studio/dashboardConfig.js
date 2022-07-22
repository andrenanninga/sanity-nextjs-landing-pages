export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62da4c0d60d1c65868937f7a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rjjnqfty',
                  apiId: 'e5af1018-9dbb-470e-903d-09c93b7522d7'
                },
                {
                  buildHookId: '62da4c0d099dad58d2260c09',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-j77b85jd',
                  apiId: '00ab2bf0-c673-4897-8906-573946eafb5d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andrenanninga/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-j77b85jd.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
