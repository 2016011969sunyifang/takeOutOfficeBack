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
    },
    required: true,
  },
  {
    field: 'businessCircle',
    component: 'Input',
    label: '商圈名称',
    colProps: {
      span: 8,
    },
    required: true,
  },
  {
    field: 'name',
    component: 'Input',
    label: '站点名称',
    colProps: {
      span: 8,
    },
    required: true,
  },
  {
    field: 'webmaster',
    component: 'Input',
    label: '负责人',
    colProps: {
      span: 8,
    },
    required: true,
  },
  {
    field: 'webmasterPhone',
    label: '负责人手机号',
    required: true,
    component: 'Input',
    colProps: {
      span: 8,
    },
  },
  {
    field: 'priceLow',
    component: 'InputNumber',
    label: '最低单价',
    colProps: {
      span: 4,
    },
    required: true,
  },
  {
    field: 'priceHigh',
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
    field: 'hasElectroMobile',
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
    field: 'electroMobilePrice',
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
    field: 'platform',
    component: 'Select',
    label: '平台',
    colProps: {
      span: 8,
    },
    componentProps: {
      options: [
        {
          label: '饿了么',
          value: '1',
          key: '1',
        },
        {
          label: '美团',
          value: '2',
          key: '2',
        },
        {
          label: '星巴克',
          value: '3',
          key: '3',
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
    field: 'wagesAndBenefits',
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
