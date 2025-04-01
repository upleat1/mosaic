const ROUTE_TYPES = {
    COMPONENT: 'component',
    PLUGIN: 'plugin',
    PAGE: 'page',
  };
  
  import guideFrame from '@/views/guide/GuideMainView.vue';
  
  const pubRoutes = [
    /*
    {
      path: '/guide',
      name: 'guide',
      component: () => import('@/views/guide/GuideMainView.vue'),
      meta: { rootClass: 'guide' },
      children: [
        {
          path: 'datepicker',
          name: 'datepicker',
          meta: { type: ROUTE_TYPES.PLUGIN },
          component: () => import('@/views/guide/GuideDatePickerView.vue'),
        },
        {
          path: 'upload',
          name: 'upload',
          meta: { type: ROUTE_TYPES.PLUGIN },
          component: () => import('@/views/guide/GuideElUpload.vue'),
        },
        {
          path: 'accordion',
          name: 'accordion',
          meta: { type: ROUTE_TYPES.COMPONENT },
          component: () => import('@/views/guide/GuideAccordionView.vue'),
        },
        {
          path: 'layout',
          name: 'Layout',
          meta: { type: ROUTE_TYPES.COMPONENT },
          component: () => import('@/views/guide/GuideLayoutView.vue'),
        },
        {
          path: 'table',
          name: 'table',
          meta: { type: ROUTE_TYPES.COMPONENT },
          component: () => import('@/views/guide/GuideTableView.vue'),
        },
        {
          path: 'table-template',
          name: 'tableTemplateGuide',
          meta: { type: ROUTE_TYPES.COMPONENT },
          component: () => import('@/views/guide/GuideTableTemplateView.vue'),
        },
        {
          path: 'popup',
          name: 'popup',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('@/views/guide/GuidePopupView.vue'),
        },
        {
          path: 'checkbox',
          name: 'checkbox',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자' },
          component: () => import('@/views/guide/GuideCheckboxView.vue'),
        },
        {
          path: 'radio',
          name: 'radio',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자' },
          component: () => import('@/views/guide/GuideRadioView.vue'),
        },
        {
          path: 'button',
          name: 'button',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('@/views/guide/GuideButtonView.vue'),
        },
        {
          path: 'combo',
          name: 'combo',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자2' },
          component: () => import('@/views/guide/GuideComboView.vue'),
        },
        {
          path: 'input',
          name: 'input',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자2' },
          component: () => import('@/views/guide/GuideInputView.vue'),
        },
        {
          path: 'tab',
          name: 'tab',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('@/views/guide/GuideTabView.vue'),
        },
        {
          path: 'toast',
          name: 'toast',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('@/views/guide/GuideToastView.vue'),
        },
        {
          path: 'category',
          name: 'category',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('@/views/guide/GuideCategoryView.vue'),
        },
  
        {
          path: 'pagination',
          name: 'pagination',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('@/views/guide/GuidePaginationView.vue'),
        },
        {
          path: 'tree',
          name: 'tree',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('@/views/guide/GuideTreeView.vue'),
        },
        {
          path: 'result',
          name: 'result',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('@/views/guide/GuideResultView.vue'),
        },
        {
          path: 'list',
          name: 'list',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('@/views/guide/GuideListView.vue'),
        },
        {
          path: 'card',
          name: 'card',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('@/views/guide/GuideCardView.vue'),
        },
        {
          path: 'textarea',
          name: 'textarea',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('@/views/guide/GuideTextareaView.vue'),
        },
        {
          path: 'switch',
          name: 'switch',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('@/views/guide/GuideSwitchView.vue'),
        },
        {
          path: 'loader',
          name: 'loader',
          meta: { type: ROUTE_TYPES.UTIL, inCharge: '작업자1' },
          component: () => import('@/views/guide/GuideLoader.vue'),
        },
  
        {
          path: 'code-editor',
          name: 'codeEditor',
          meta: { type: ROUTE_TYPES.COMPONENT, inCharge: '작업자1' },
          component: () => import('@/views/guide/GuideCodeEditorView.vue'),
        },
      ],
    },
  */

  ];
  
  export default pubRoutes;
  