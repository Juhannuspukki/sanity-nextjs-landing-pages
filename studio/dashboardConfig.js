export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f8e0884c7c5d248076c0f0c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-r22xeuxf',
                  apiId: '2be07fbf-1c7a-4c25-8343-d6f58ffbcc25'
                },
                {
                  buildHookId: '5f8e088446d02c447f815ea0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-sveafmen',
                  apiId: 'ac1b3ece-56f6-46fb-90bc-d08c01a126fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Juhannuspukki/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-sveafmen.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
