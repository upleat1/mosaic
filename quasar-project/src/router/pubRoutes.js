const ROUTE_TYPES = {
    COMPONENT: 'component',
    PLUGIN: 'plugin',
    PAGE: 'page',
  };
  
  
  const pubRoutes = [
    
    {
      path: '/guide',
      name: 'guide',
      component: () => import('/src/pages/guide/GuideMainView.vue'),
      meta: { rootClass: 'guide' },
      children: [
        {
          path: 'button',
          name: 'button',
          meta: { type: ROUTE_TYPES.COMPONENT },
          component: () => import('/src/pages/guide/GuideButton.vue'),
        },

        /*
        {
          path: 'upload',
          name: 'upload',
          meta: { type: ROUTE_TYPES.PLUGIN },
          component: () => import('/src/pages/guide/GuideElUpload.vue'),
        },
        {
          path: 'accordion',
          name: 'accordion',
          meta: { type: ROUTE_TYPES.COMPONENT },
          component: () => import('/src/pages/guide/GuideAccordionView.vue'),
        },
        {
          path: 'layout',
          name: 'Layout',
          meta: { type: ROUTE_TYPES.COMPONENT },
          component: () => import('/src/pages/guide/GuideLayoutView.vue'),
        },
        {
          path: 'table',
          name: 'table',
          meta: { type: ROUTE_TYPES.COMPONENT },
          component: () => import('/src/pages/guide/GuideTableView.vue'),
        },
        {
          path: 'table-template',
          name: 'tableTemplateGuide',
          meta: { type: ROUTE_TYPES.COMPONENT },
          component: () => import('/src/pages/guide/GuideTableTemplateView.vue'),
        },
        {
          path: 'popup',
          name: 'popup',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('/src/pages/guide/GuidePopupView.vue'),
        },
        {
          path: 'checkbox',
          name: 'checkbox',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자' },
          component: () => import('/src/pages/guide/GuideCheckboxView.vue'),
        },
        {
          path: 'radio',
          name: 'radio',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자' },
          component: () => import('/src/pages/guide/GuideRadioView.vue'),
        },
        {
          path: 'button',
          name: 'button',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('/src/pages/guide/GuideButtonView.vue'),
        },
        {
          path: 'combo',
          name: 'combo',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자2' },
          component: () => import('/src/pages/guide/GuideComboView.vue'),
        },
        {
          path: 'input',
          name: 'input',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자2' },
          component: () => import('/src/pages/guide/GuideInputView.vue'),
        },
        {
          path: 'tab',
          name: 'tab',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('/src/pages/guide/GuideTabView.vue'),
        },
        {
          path: 'toast',
          name: 'toast',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('/src/pages/guide/GuideToastView.vue'),
        },
        {
          path: 'category',
          name: 'category',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('/src/pages/guide/GuideCategoryView.vue'),
        },
  
        {
          path: 'pagination',
          name: 'pagination',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('/src/pages/guide/GuidePaginationView.vue'),
        },
        {
          path: 'tree',
          name: 'tree',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('/src/pages/guide/GuideTreeView.vue'),
        },
        {
          path: 'result',
          name: 'result',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('/src/pages/guide/GuideResultView.vue'),
        },
        {
          path: 'list',
          name: 'list',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('/src/pages/guide/GuideListView.vue'),
        },
        {
          path: 'card',
          name: 'card',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('/src/pages/guide/GuideCardView.vue'),
        },
        {
          path: 'textarea',
          name: 'textarea',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('/src/pages/guide/GuideTextareaView.vue'),
        },
        {
          path: 'switch',
          name: 'switch',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('/src/pages/guide/GuideSwitchView.vue'),
        },
        {
          path: 'loader',
          name: 'loader',
          meta: { type: ROUTE_TYPES.UTIL, inCharge: '작업자1' },
          component: () => import('/src/pages/guide/GuideLoader.vue'),
        },
  
        {
          path: 'code-editor',
          name: 'codeEditor',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('/src/pages/guide/GuideCodeEditorView.vue'),
        },
        */
      ],
    },
  

  ];
  
  export default pubRoutes;
  