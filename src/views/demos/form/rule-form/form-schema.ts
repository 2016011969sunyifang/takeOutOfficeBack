import type { FormItemSchema } from '@/components/core/schema-form/types/form';

export const schemas: FormItemSchema[] = [
  {
    label: '地区',
    field: 'region',
    colProps: {
      span: 8,
    },
    component: 'Cascader',
    componentProps: {
      options: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency',
                },
                {
                  value: 'feedback',
                  label: 'Feedback',
                },
                {
                  value: 'efficiency',
                  label: 'Efficiency',
                },
                {
                  value: 'controllability',
                  label: 'Controllability',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'side nav',
                  label: 'Side Navigation',
                },
                {
                  value: 'top nav',
                  label: 'Top Navigation',
                },
              ],
            },
          ],
        },
        {
          value: 'component',
          label: 'Component',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout',
                },
                {
                  value: 'color',
                  label: 'Color',
                },
                {
                  value: 'typography',
                  label: 'Typography',
                },
                {
                  value: 'icon',
                  label: 'Icon',
                },
                {
                  value: 'button',
                  label: 'Button',
                },
              ],
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio',
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox',
                },
                {
                  value: 'input',
                  label: 'Input',
                },
                {
                  value: 'input-number',
                  label: 'InputNumber',
                },
                {
                  value: 'select',
                  label: 'Select',
                },
                {
                  value: 'cascader',
                  label: 'Cascader',
                },
                {
                  value: 'switch',
                  label: 'Switch',
                },
                {
                  value: 'slider',
                  label: 'Slider',
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker',
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker',
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker',
                },
                {
                  value: 'upload',
                  label: 'Upload',
                },
                {
                  value: 'rate',
                  label: 'Rate',
                },
                {
                  value: 'form',
                  label: 'Form',
                },
              ],
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table',
                },
                {
                  value: 'tag',
                  label: 'Tag',
                },
                {
                  value: 'progress',
                  label: 'Progress',
                },
                {
                  value: 'tree',
                  label: 'Tree',
                },
                {
                  value: 'pagination',
                  label: 'Pagination',
                },
                {
                  value: 'badge',
                  label: 'Badge',
                },
              ],
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert',
                },
                {
                  value: 'loading',
                  label: 'Loading',
                },
                {
                  value: 'message',
                  label: 'Message',
                },
                {
                  value: 'message-box',
                  label: 'MessageBox',
                },
                {
                  value: 'notification',
                  label: 'Notification',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'Menu',
                },
                {
                  value: 'tabs',
                  label: 'Tabs',
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb',
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown',
                },
                {
                  value: 'steps',
                  label: 'Steps',
                },
              ],
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog',
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip',
                },
                {
                  value: 'popover',
                  label: 'Popover',
                },
                {
                  value: 'card',
                  label: 'Card',
                },
                {
                  value: 'carousel',
                  label: 'Carousel',
                },
                {
                  value: 'collapse',
                  label: 'Collapse',
                },
              ],
            },
          ],
        },
        {
          value: 'resource',
          label: 'Resource',
          children: [
            {
              value: 'axure',
              label: 'Axure Components',
            },
            {
              value: 'sketch',
              label: 'Sketch Templates',
            },
            {
              value: 'docs',
              label: 'Design Documentation',
            },
          ],
        },
      ],
    },
    required: true,
  },
  {
    field: 'businessName',
    component: 'Input',
    label: '商圈名称',
    colProps: {
      span: 8,
    },
    required: true,
  },
  {
    field: 'siteName',
    component: 'Input',
    label: '站点名称',
    colProps: {
      span: 8,
    },
    required: true,
  },
  {
    field: 'head',
    component: 'Input',
    label: '负责人',
    colProps: {
      span: 8,
    },
    required: true,
  },
  {
    field: 'headPhone',
    label: '负责人手机号',
    required: true,
    component: 'Input',
    colProps: {
      span: 8,
    },
  },
  {
    field: 'lowerPrice',
    component: 'InputNumber',
    label: '最低单价',
    colProps: {
      span: 4,
    },
    required: true,
  },
  {
    field: 'heighPrice',
    component: 'InputNumber',
    label: '最高单价',
    colProps: {
      span: 4,
    },
    required: true,
  },
  // {
  //   field: 'field44',
  //   component: 'InputCountDown',
  //   label: '验证码',
  //   colProps: {
  //     span: 8
  //   },
  //   required: true
  // },
  {
    field: 'electricMotorcycle',
    component: 'Select',
    label: '电车',
    colProps: {
      span: 8,
    },
    componentProps: {
      options: [
        {
          label: '自备',
          value: '1',
          key: '1',
        },
        {
          label: '可提供租车',
          value: '2',
          key: '2',
        },
      ],
    },
    required: true,
  },
  {
    field: 'motorcyclePrice',
    component: 'Input',
    label: '电车费用',
    colProps: {
      span: 8,
    },
  },
  {
    field: 'hasDormitory',
    component: 'Select',
    label: '是否有宿舍',
    colProps: {
      span: 8,
    },
    componentProps: {
      options: [
        {
          label: '有宿舍',
          value: '1',
          key: '1',
        },
        {
          label: '无宿舍',
          value: '2',
          key: '2',
        },
      ],
    },
    required: true,
  },
  {
    field: 'dormitoryPrice',
    component: 'Input',
    label: '宿舍费',
    colProps: {
      span: 8,
    },
  },
  {
    field: 'field441',
    component: 'Input',
    label: '自定义校验',
    colProps: {
      span: 8,
    },
    vShow: true,
    rules: [
      {
        required: true,
        validator: async (_, value) => {
          if (!value) {
            return Promise.reject('值不能为空');
          }
          if (value === '1') {
            return Promise.reject('值不能为1');
          }
          return Promise.resolve();
        },
        trigger: 'change',
      },
    ],
  },
  {
    field: 'status',
    component: 'RadioGroup',
    label: '状态',
    colProps: {
      span: 8,
    },
    defaultValue: 1,
    componentProps: {
      options: [
        {
          label: '热招中',
          value: '1',
        },
        {
          label: '已招满',
          value: '2',
        },
      ],
    },
    required: true,
  },
  {
    field: 'detailedAddress',
    component: 'TextArea',
    label: '站点详细地址',
    colProps: {
      span: 16,
    },
    required: true,
  },
  {
    field: 'WagesAndBenefits',
    component: 'TextArea',
    label: '薪资福利',
    colProps: {
      span: 16,
    },
  },
  {
    field: 'notes',
    component: 'TextArea',
    label: '备注',
    colProps: {
      span: 16,
    },
  },
  // {
  //   field: 'field8',
  //   component: 'Input',
  //   label: '后端异步验证',
  //   colProps: {
  //     span: 8,
  //   },
  //   helpMessage: ['本字段演示异步验证', '本地规则：必须填写', '后端规则：不能包含admin'],
  //   rules: [
  //     {
  //       required: true,
  //       message: '请输入数据',
  //     },
  //     {
  //       validator(_, value = '') {
  //         return new Promise((resolve, reject) => {
  //           setTimeout(() => {
  //             if (value.includes('admin')) {
  //               reject('该字段不能包含admin关键字');
  //             } else {
  //               resolve();
  //             }
  //           }, 100);
  //         });
  //       },
  //     },
  //   ],
  //   vShow: false,
  // },
];
