import { Menus } from '@/types/menu';

export const menuData: Menus[] = [
    {
        id: '0',
        title: '驾驶舱',
        index: '/dashboard',
        icon: 'Odometer',
    },
    {
        id: '1',
        title: '用户管理',
        index: '1',
        icon: 'User',
        children: [
            {
                id: '11',
                pid: '1',
                index: '/user',
                title: '用户管理',
            },
            {
                id: '12',
                pid: '1',
                index: '/role',
                title: '角色管理',
            },
            {
                id: '13',
                pid: '1',
                index: '/menu',
                title: '菜单管理',
            },
        ],
    },
    {
        id: '2',
        title: '常用组件',
        index: '2-1',
        icon: 'Calendar',
        children: [
            {
                id: '21',
                pid: '3',
                index: '/form',
                title: '常用表单',
            },
            {
                id: '22',
                pid: '3',
                index: '/upload',
                title: '上传文件',
            },
            {
                id: '27',
                pid: '2',
                index: '/steps',
                title: '步骤条',
            },
            {
                id: '28',
                pid: '2',
                index: '/statistic',
                title: '数据统计',
            },
            {
                id: '29',
                pid: '3',
                index: '29',
                title: '编辑器',
                children: [
                    {
                        id: '291',
                        pid: '29',
                        index: '/editor',
                        title: '富文本编辑器',
                    },
                    {
                        id: '292',
                        pid: '29',
                        index: '/markdown',
                        title: 'markdown编辑器',
                    },
                    {
                        id: '293',
                        pid: '29',
                        index: '/codemirror',
                        title: 'codemirror编辑器',
                    },
                ],
            },
        ],
    },
    {
        id: '3',
        title: '常用表格',
        index: '3',
        icon: 'Calendar',
        children: [
            {
                id: '31',
                pid: '3',
                index: '/table',
                title: '基础表格',
            },
            {
                id: '32',
                pid: '3',
                index: '/table-editor',
                title: '可编辑表格',
            },
            {
                id: '33',
                pid: '3',
                index: '/import',
                title: '导入Excel',
            },
            {
                id: '34',
                pid: '3',
                index: '/export',
                title: '导出Excel',
            },
        ],
    },
    {
        id: '4',
        icon: 'PieChart',
        index: '4',
        title: '图表',
        children: [
            {
                id: '42',
                pid: '4',
                index: '/echarts',
                title: 'echarts图表',
            },
        ],
    }
];
