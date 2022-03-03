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
  businessCircle: '',
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
const getRegion = (code) => {
  const regionMaps = [
    {
      value: '310101',
      label: '黄浦区',
    },
    {
      value: '310103',
      label: '卢湾区',
    },
    {
      value: '310104',
      label: '徐汇区',
    },
    {
      value: '310105',
      label: '长宁区',
    },
    {
      value: '310106',
      label: '静安区',
    },
    {
      value: '310107',
      label: '普陀区',
    },
    {
      value: '310108',
      label: '闸北区',
    },
    {
      value: '310109',
      label: '虹口区',
    },
    {
      value: '310110',
      label: '杨浦区',
    },
    {
      value: '310112',
      label: '闵行区',
    },
    {
      value: '310113',
      label: '宝山区',
    },
    {
      value: '310114',
      label: '嘉定区',
    },
    {
      value: '310115',
      label: '浦东新区',
    },
    {
      value: '310116',
      label: '金山区',
    },
    {
      value: '310117',
      label: '松江区',
    },
    {
      value: '310118',
      label: '青浦区',
    },
    {
      value: '310119',
      label: '南汇区',
    },
    {
      value: '310120',
      label: '奉贤区',
    },
    {
      value: '310230',
      label: '崇明县',
    },
    {
      value: '330102',
      label: '上城区',
    },
    {
      value: '330103',
      label: '下城区',
    },
    {
      value: '330104',
      label: '江干区',
    },
    {
      value: '330105',
      label: '拱墅区',
    },
    {
      value: '330106',
      label: '西湖区',
    },
    {
      value: '330108',
      label: '滨江区',
    },
    {
      value: '330109',
      label: '萧山区',
    },
    {
      value: '330110',
      label: '余杭区',
    },
    {
      value: '330111',
      label: '富阳区',
    },
    {
      value: '330112',
      label: '临安区',
    },
    {
      value: '330122',
      label: '桐庐县',
    },
    {
      value: '330127',
      label: '淳安县',
    },
    {
      value: '330182',
      label: '建德市',
    },
  ];
  let name = '';
  regionMaps.map((ele) => {
    if (ele.value == code) {
      name = ele.label;
    }
  });
  return name;
};
const getPlatForm = (platFormId) => {
  const plat = ['饿了么', '美团', '星巴克'];

  return plat[platFormId - 1];
};
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
            value: '310100',
            label: '上海',
            children: [
              {
                value: '310101',
                label: '黄浦区',
              },
              {
                value: '310103',
                label: '卢湾区',
              },
              {
                value: '310104',
                label: '徐汇区',
              },
              {
                value: '310105',
                label: '长宁区',
              },
              {
                value: '310106',
                label: '静安区',
              },
              {
                value: '310107',
                label: '普陀区',
              },
              {
                value: '310108',
                label: '闸北区',
              },
              {
                value: '310109',
                label: '虹口区',
              },
              {
                value: '310110',
                label: '杨浦区',
              },
              {
                value: '310112',
                label: '闵行区',
              },
              {
                value: '310113',
                label: '宝山区',
              },
              {
                value: '310114',
                label: '嘉定区',
              },
              {
                value: '310115',
                label: '浦东新区',
              },
              {
                value: '310116',
                label: '金山区',
              },
              {
                value: '310117',
                label: '松江区',
              },
              {
                value: '310118',
                label: '青浦区',
              },
              {
                value: '310119',
                label: '南汇区',
              },
              {
                value: '310120',
                label: '奉贤区',
              },
              {
                value: '310230',
                label: '崇明县',
              },
            ],
          },
          {
            value: '330100',
            label: '杭州',
            children: [
              {
                value: '330102',
                label: '上城区',
              },
              {
                value: '330103',
                label: '下城区',
              },
              {
                value: '330104',
                label: '江干区',
              },
              {
                value: '330105',
                label: '拱墅区',
              },
              {
                value: '330106',
                label: '西湖区',
              },
              {
                value: '330108',
                label: '滨江区',
              },
              {
                value: '330109',
                label: '萧山区',
              },
              {
                value: '330110',
                label: '余杭区',
              },
              {
                value: '330111',
                label: '富阳区',
              },
              {
                value: '330112',
                label: '临安区',
              },
              {
                value: '330122',
                label: '桐庐县',
              },
              {
                value: '330127',
                label: '淳安县',
              },
              {
                value: '330182',
                label: '建德市',
              },
            ],
          },
        ],
      }),
    },
    bodyCell: ({ record }) => <>{getRegion(record.region)}</>,
  },
  {
    title: '商圈',
    align: 'center',
    dataIndex: 'businessCircle',
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
      componentProps: {
        options: [
          {
            label: '6-7',
            value: '6-7',
          },
          {
            label: '6.5-7.5',
            value: '6.5-7.5',
          },
          {
            label: '7-8',
            value: '7-8',
          },
          {
            label: '7.5-8.5',
            value: '7.5-8.5',
          },
        ],
      },
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
                  value: 1,
                },
                {
                  label: '美团',
                  value: 2,
                },
                {
                  label: '星巴克',
                  value: 3,
                },
              ];
              resolve(data);
            }, 1500);
          });
        },
      },
    },
    bodyCell: ({ record }) => <div>{getPlatForm(record.platform)}</div>,
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
                  value: 1,
                },
                {
                  label: '无宿舍',
                  value: 2,
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
        {['有宿舍', '无宿舍'][record.hasDormitory - 1]}
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
                  value: 2,
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
      <Tag color={record.hasElectroMobile == 2 ? 'green' : 'default'}>
        {['电车自备', '提供电车'][record.hasElectroMobile - 1]}
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
                  value: 2,
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
        {['热招中', '已招满'][record.status - 1]}
      </Tag>
    ),
  },
];
