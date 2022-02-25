import type { TableColumn } from '@/components/core/dynamic-table';
import { Tag } from 'ant-design-vue';

const names = ['王路飞', '王大蛇', '李白', '刺客伍六七'];
export const tableData = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  date: new Date().toLocaleString(),
  name: names[~~(Math.random() * 4)],
  price: ~~(Math.random() * 4),
  gender: ~~(Math.random() * 2),
  status: ~~(Math.random() * 2),
  hasElectroMobile: ~~(Math.random() * 2),
  hasDormitory: ~~(Math.random() * 2),
  region: '',
  webmaster: '',
  platform: ~~(Math.random() * 3),
}));

// const getClothesByGender = (gender: number) => {
//   if (gender === 1) {
//     // 男
//     return [
//       {
//         label: '西装',
//         value: 1,
//       },
//       {
//         label: '领带',
//         value: 0,
//       },
//     ];
//   } else if (gender === 0) {
//     //女
//     return [
//       {
//         label: '裙子',
//         value: 1,
//       },
//       {
//         label: '包包',
//         value: 0,
//       },
//     ];
//   }
//   return [];
// };

// 数据项类型
export type ListItemType = typeof tableData[number];
// 使用TableColumn<ListItemType> 将会限制dataIndex的类型，但换来的是dataIndex有类型提示
export const columns: TableColumn<ListItemType>[] = [
  {
    title: '地区',
    align: 'center',
    dataIndex: 'region',
    width: 400,
    formItemProps: {
      component: 'Cascader',
      componentProps: () => ({
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
      }),
    },
    bodyCell: ({ record }) => <>{record.region}</>,
  },
  {
    title: '站点名称',
    align: 'center',
    dataIndex: 'name',
  },
  {
    title: '站长名称',
    align: 'center',
    dataIndex: 'webmaster',
  },
  {
    title: '单价',
    align: 'center',
    dataIndex: 'price',
    formItemProps: {
      component: 'Select',
    },
    bodyCell: ({ record }) => <>{[record.price]}元</>,
  },
  {
    title: '平台',
    align: 'center',
    dataIndex: 'platform',
    formItemProps: {
      component: 'Select',
      componentProps: {
        request: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              const data = [
                {
                  label: '饿了么',
                  value: 0,
                },
                {
                  label: '美团',
                  value: 1,
                },
                {
                  label: '星巴克',
                  value: 2,
                },
              ];
              resolve(data);
            }, 1500);
          });
        },
      },
    },
    bodyCell: ({ record }) => <div>{['饿了么', '美团', '星巴克'][record.platform]}</div>,
  },
  {
    title: '有无宿舍',
    align: 'center',
    dataIndex: 'hasDormitory',
    formItemProps: {
      component: 'Select',
      componentProps: {
        request: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              const data = [
                {
                  label: '有宿舍',
                  value: 0,
                },
                {
                  label: '无宿舍',
                  value: 1,
                },
              ];
              resolve(data);
            }, 1500);
          });
        },
      },
    },
    bodyCell: ({ record }) => (
      <Tag color={record.hasDormitory == 1 ? 'green' : 'default'}>
        {['无宿舍', '有宿舍'][record.hasDormitory]}
      </Tag>
    ),
  },
  {
    title: '电车租赁',
    align: 'center',
    dataIndex: 'hasElectroMobile',
    formItemProps: {
      component: 'Select',
      componentProps: {
        request: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              const data = [
                {
                  label: '提供电车',
                  value: 0,
                },
                {
                  label: '电车自备',
                  value: 1,
                },
              ];
              resolve(data);
            }, 1500);
          });
        },
      },
    },
    bodyCell: ({ record }) => (
      <Tag color={record.hasElectroMobile == 1 ? 'green' : 'default'}>
        {['电车自备', '提供电车'][record.hasElectroMobile]}
      </Tag>
    ),
  },
  {
    title: '状态',
    align: 'center',
    dataIndex: 'status',
    formItemProps: {
      component: 'Select',
      componentProps: {
        request: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              const data = [
                {
                  label: '已招满',
                  value: 0,
                },
                {
                  label: '热招中',
                  value: 1,
                },
              ];
              resolve(data);
            }, 1500);
          });
        },
      },
    },
    bodyCell: ({ record }) => (
      <Tag color={record.status == 1 ? 'red' : 'default'}>
        {['已招满', '热招中'][record.status]}
      </Tag>
    ),
  },
];
