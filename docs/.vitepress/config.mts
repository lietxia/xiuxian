import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '修仙设定Wiki',
  description: '完整的修仙世界设定知识库',
  lang: 'zh-CN',
  
  ignoreDeadLinks: true,
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
  ],

  themeConfig: {
    siteTitle: '修仙设定Wiki',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '世界观', link: '/worldbuilding/' },
      { text: '修炼体系', link: '/cultivation/' },
      { text: '功法法术', link: '/techniques/' },
      { text: '资源物品', link: '/resources/' },
      { text: '势力组织', link: '/factions/' },
      { text: '世界地理', link: '/geography/' },
      { text: '神兽妖兽', link: '/creatures/' },
      { text: '人物设定', link: '/characters/' },
      { text: '写作参考', link: '/writing-guide/' },
    ],

    sidebar: {
      '/worldbuilding/': [
        {
          text: '世界观',
          collapsed: false,
          items: [
            { text: '总览', link: '/worldbuilding/' },
          ]
        },
        {
          text: '天道规则',
          collapsed: true,
          items: [
            { text: '天道规则', link: '/worldbuilding/天道规则' },
            { text: '功德体系', link: '/worldbuilding/功德体系' },
            { text: '阴阳五行哲学基础', link: '/worldbuilding/阴阳五行哲学基础' },
          ]
        },
        {
          text: '天地规则',
          collapsed: true,
          items: [
            { text: '因果律', link: '/worldbuilding/cosmic-rules/因果律' },
            { text: '时间规则', link: '/worldbuilding/cosmic-rules/时间规则' },
            { text: '空间规则', link: '/worldbuilding/cosmic-rules/空间规则' },
          ]
        },
        {
          text: '界面划分',
          collapsed: true,
          items: [
            { text: '界面总览', link: '/worldbuilding/realms/界面总览' },
            { text: '凡界', link: '/worldbuilding/realms/凡界' },
            { text: '修真界', link: '/worldbuilding/realms/修真界' },
            { text: '仙界', link: '/worldbuilding/realms/仙界' },
            { text: '魔界', link: '/worldbuilding/realms/魔界' },
            { text: '妖界', link: '/worldbuilding/realms/妖界' },
            { text: '佛界', link: '/worldbuilding/realms/佛界' },
            { text: '冥界', link: '/worldbuilding/realms/冥界' },
            { text: '神界', link: '/worldbuilding/realms/神界' },
          ]
        },
        {
          text: '各界关系',
          collapsed: true,
          items: [
            { text: '各界关系', link: '/worldbuilding/各界关系' },
            { text: '仙凡关系', link: '/worldbuilding/仙凡关系' },
            { text: '界面通道', link: '/worldbuilding/界面通道' },
            { text: '界面通道完整体系', link: '/worldbuilding/界面通道完整体系' },
            { text: '时间流速差异', link: '/worldbuilding/时间流速差异' },
          ]
        },
        {
          text: '历史与历法',
          collapsed: true,
          items: [
            { text: '历史年表', link: '/worldbuilding/历史年表' },
            { text: '修仙世界大事件', link: '/worldbuilding/修仙世界大事件' },
            { text: '修仙历法', link: '/worldbuilding/修仙历法' },
            { text: '修仙历法体系', link: '/worldbuilding/修仙历法体系' },
            { text: '修仙历法完整体系', link: '/worldbuilding/修仙历法完整体系' },
          ]
        },
        {
          text: '国家与政治',
          collapsed: true,
          items: [
            { text: '国家设定', link: '/worldbuilding/国家设定' },
            { text: '国家设定补充', link: '/worldbuilding/国家设定补充' },
            { text: '修仙政治体系完整', link: '/worldbuilding/修仙政治体系完整' },
          ]
        },
        {
          text: '社会与文化',
          collapsed: true,
          items: [
            { text: '修仙生态系统', link: '/worldbuilding/修仙生态系统' },
            { text: '修仙者日常生活', link: '/worldbuilding/修仙者日常生活' },
            { text: '修仙科技与文明', link: '/worldbuilding/修仙科技与文明' },
            { text: '修仙界礼仪规范', link: '/worldbuilding/修仙界礼仪规范' },
            { text: '修仙界社交禁忌', link: '/worldbuilding/修仙界社交禁忌' },
            { text: '修仙界节日庆典', link: '/worldbuilding/修仙界节日庆典' },
          ]
        },
        {
          text: '禁忌与规则',
          collapsed: true,
          items: [
            { text: '修仙界规则与禁忌', link: '/worldbuilding/修仙界规则与禁忌' },
            { text: '修仙禁忌与规则', link: '/worldbuilding/修仙禁忌与规则' },
            { text: '修仙禁忌与规则完整体系', link: '/worldbuilding/修仙禁忌与规则完整体系' },
          ]
        },
        {
          text: '地理环境',
          collapsed: true,
          items: [
            { text: '名山胜境', link: '/worldbuilding/geography/名山胜境' },
            { text: '灵地', link: '/worldbuilding/geography/灵地' },
            { text: '秘境', link: '/worldbuilding/geography/秘境' },
            { text: '绝地', link: '/worldbuilding/geography/绝地' },
          ]
        },
      ],
      
      '/cultivation/': [
        {
          text: '修炼体系',
          collapsed: false,
          items: [
            { text: '总览', link: '/cultivation/' },
            { text: '修炼体系总览', link: '/cultivation/修炼体系总览' },
          ]
        },
        {
          text: '境界划分',
          collapsed: true,
          items: [
            { text: '境界总览', link: '/cultivation/realms/境界总览' },
            { text: '修真境界', link: '/cultivation/realms/修真境界' },
            { text: '仙界境界', link: '/cultivation/realms/仙界境界' },
            { text: '修魔境界', link: '/cultivation/realms/修魔境界' },
            { text: '修妖境界', link: '/cultivation/realms/修妖境界' },
            { text: '佛界境界', link: '/cultivation/realms/佛界境界' },
            { text: '常规仙侠境界', link: '/cultivation/realms/常规仙侠境界' },
          ]
        },
        {
          text: '修炼方法',
          collapsed: true,
          items: [
            { text: '功法选择', link: '/cultivation/methods/功法选择' },
            { text: '吸纳灵气', link: '/cultivation/methods/吸纳灵气' },
            { text: '心境修炼', link: '/cultivation/methods/心境修炼' },
            { text: '闭关修炼', link: '/cultivation/methods/闭关修炼' },
            { text: '顿悟突破', link: '/cultivation/methods/顿悟突破' },
            { text: '走火入魔', link: '/cultivation/methods/走火入魔' },
          ]
        },
        {
          text: '天劫体系',
          collapsed: true,
          items: [
            { text: '天劫体系详解', link: '/cultivation/tribulations/天劫体系详解' },
            { text: '雷劫', link: '/cultivation/tribulations/雷劫' },
            { text: '心魔劫', link: '/cultivation/tribulations/心魔劫' },
            { text: '心魔体系', link: '/cultivation/tribulations/心魔体系' },
            { text: '情劫', link: '/cultivation/tribulations/情劫' },
            { text: '五行劫', link: '/cultivation/tribulations/五行劫' },
            { text: '风火劫', link: '/cultivation/tribulations/风火劫' },
            { text: '混沌劫', link: '/cultivation/tribulations/混沌劫' },
          ]
        },
        {
          text: '资质天赋',
          collapsed: true,
          items: [
            { text: '灵根', link: '/cultivation/talents/灵根' },
            { text: '灵根体系', link: '/cultivation/talents/灵根体系' },
            { text: '根骨', link: '/cultivation/talents/根骨' },
            { text: '悟性', link: '/cultivation/talents/悟性' },
            { text: '悟性根骨', link: '/cultivation/talents/悟性根骨' },
            { text: '体质', link: '/cultivation/talents/体质' },
            { text: '体质血脉', link: '/cultivation/talents/体质血脉' },
            { text: '特殊体质详解', link: '/cultivation/talents/特殊体质详解' },
            { text: '血脉', link: '/cultivation/talents/血脉' },
            { text: '命格机缘', link: '/cultivation/talents/命格机缘' },
          ]
        },
        {
          text: '特殊修炼',
          collapsed: true,
          items: [
            { text: '散仙体系', link: '/cultivation/special/散仙体系' },
            { text: '飞升体系详解', link: '/cultivation/special/飞升体系详解' },
          ]
        },
        {
          text: '其他体系',
          collapsed: true,
          items: [
            { text: '寿命体系', link: '/cultivation/寿命体系' },
            { text: '道心体系', link: '/cultivation/道心体系' },
            { text: '体内世界与储物空间', link: '/cultivation/体内世界与储物空间' },
            { text: '血脉觉醒与天赋神通', link: '/cultivation/血脉觉醒与天赋神通' },
            { text: '神识体系', link: '/cultivation/神识体系' },
            { text: '神识战斗机制', link: '/cultivation/神识战斗机制' },
          ]
        },
        {
          text: '修炼资源',
          collapsed: true,
          items: [
            { text: '灵石', link: '/cultivation/resources/灵石' },
            { text: '灵脉', link: '/cultivation/resources/灵脉' },
          ]
        },
        {
          text: '职业体系',
          collapsed: true,
          items: [
            { text: '修仙职业总览', link: '/cultivation/professions/修仙职业总览' },
            { text: '修仙职业详解', link: '/cultivation/professions/修仙职业详解' },
          ]
        },
        {
          text: '货币经济',
          collapsed: true,
          items: [
            { text: '货币经济体系', link: '/cultivation/economy/货币经济体系' },
          ]
        },
      ],
      
      '/techniques/': [
        {
          text: '功法法术',
          collapsed: false,
          items: [
            { text: '总览', link: '/techniques/' },
            { text: '功法体系', link: '/techniques/功法体系' },
            { text: '功法品级详解', link: '/techniques/功法品级详解' },
          ]
        },
        {
          text: '功法分类',
          collapsed: true,
          items: [
            { text: '功法图鉴大全', link: '/techniques/categories/功法图鉴大全' },
            { text: '攻击类功法', link: '/techniques/categories/attack' },
            { text: '防御类功法', link: '/techniques/categories/defense' },
            { text: '辅助类功法', link: '/techniques/categories/support' },
            { text: '幻术类功法', link: '/techniques/categories/illusion' },
            { text: '遁术类功法', link: '/techniques/categories/escape' },
            { text: '炼丹类功法', link: '/techniques/categories/alchemy' },
            { text: '炼器类功法', link: '/techniques/categories/炼器类功法' },
            { text: '符箓类功法', link: '/techniques/categories/talismans类功法' },
            { text: '阵法类功法', link: '/techniques/categories/formations类功法' },
          ]
        },
        {
          text: '法术体系',
          collapsed: true,
          items: [
            { text: '技能分类', link: '/techniques/技能分类' },
            { text: '元素法术', link: '/techniques/spell-system/元素法术' },
            { text: '召唤法术', link: '/techniques/spell-system/召唤法术' },
            { text: '封印法术', link: '/techniques/spell-system/封印法术' },
            { text: '禁术', link: '/techniques/spell-system/禁术' },
          ]
        },
        {
          text: '特殊功法',
          collapsed: true,
          items: [
            { text: '炼体功法', link: '/techniques/special-techniques/炼体功法' },
            { text: '灵魂功法', link: '/techniques/special-techniques/灵魂功法' },
            { text: '双修功法', link: '/techniques/special-techniques/双修功法' },
            { text: '魔功', link: '/techniques/special-techniques/魔功' },
            { text: '傀儡术与机关术', link: '/techniques/special-techniques/傀儡术与机关术' },
            { text: '驭兽术与灵兽契约', link: '/techniques/special-techniques/驭兽术与灵兽契约' },
            { text: '分身术与化身术', link: '/techniques/special-techniques/分身术与化身术' },
            { text: '诅咒之术与巫蛊术', link: '/techniques/special-techniques/诅咒之术与巫蛊术' },
            { text: '血祭与血炼之术', link: '/techniques/special-techniques/血祭与血炼之术' },
            { text: '秘术体系', link: '/techniques/special-techniques/秘术体系' },
          ]
        },
        {
          text: '阵法体系',
          collapsed: true,
          items: [
            { text: '阵法体系总览', link: '/techniques/formations/阵法体系总览' },
            { text: '防御阵', link: '/techniques/formations/防御阵' },
            { text: '攻击阵', link: '/techniques/formations/攻击阵' },
            { text: '杀阵', link: '/techniques/formations/杀阵' },
            { text: '幻阵', link: '/techniques/formations/幻阵' },
            { text: '困阵', link: '/techniques/formations/困阵' },
            { text: '聚灵阵', link: '/techniques/formations/聚灵阵' },
            { text: '传送阵', link: '/techniques/formations/传送阵' },
            { text: '复合阵', link: '/techniques/formations/复合阵' },
            { text: '高阶阵法详解', link: '/techniques/formations/高阶阵法详解' },
          ]
        },
        {
          text: '符箓体系',
          collapsed: true,
          items: [
            { text: '符箓总览', link: '/techniques/talismans/符箓总览' },
            { text: '攻击符箓', link: '/techniques/talismans/攻击符箓' },
            { text: '防御符箓', link: '/techniques/talismans/防御符箓' },
            { text: '辅助符箓', link: '/techniques/talismans/辅助符箓' },
          ]
        },
        {
          text: '战斗体系',
          collapsed: true,
          items: [
            { text: '修仙界战斗体系', link: '/techniques/修仙界战斗体系' },
            { text: '战力计算', link: '/techniques/战力计算' },
            { text: '战斗等级', link: '/techniques/战斗等级' },
            { text: '属性克制', link: '/techniques/属性克制' },
          ]
        },
      ],
      
      '/resources/': [
        {
          text: '资源物品',
          collapsed: false,
          items: [
            { text: '总览', link: '/resources/' },
            { text: '入门基础设定清单', link: '/resources/入门基础设定清单' },
          ]
        },
        {
          text: '经济体系',
          collapsed: true,
          items: [
            { text: '灵石货币', link: '/resources/灵石货币' },
            { text: '修仙经济体系', link: '/resources/修仙经济体系' },
            { text: '修仙经济体系详解', link: '/resources/修仙经济体系详解' },
            { text: '经济体系细节', link: '/resources/经济体系细节' },
            { text: '物价体系', link: '/resources/物价体系' },
            { text: '交易规则', link: '/resources/交易规则' },
            { text: '黑市交易', link: '/resources/黑市交易' },
          ]
        },
        {
          text: '丹药体系',
          collapsed: true,
          items: [
            { text: '丹道总览', link: '/resources/pill-system/丹道总览' },
            { text: '丹药品级', link: '/resources/pill-system/丹药品级' },
            { text: '丹师等级', link: '/resources/pill-system/丹师等级' },
            { text: '常见丹药', link: '/resources/pill-system/常见丹药' },
            { text: '禁忌丹药', link: '/resources/pill-system/禁忌丹药' },
          ]
        },
        {
          text: '丹药',
          collapsed: true,
          items: [
            { text: '丹药图鉴', link: '/resources/pills/丹药图鉴' },
            { text: '丹药图鉴大全', link: '/resources/pills/丹药图鉴大全' },
            { text: '一至九品丹药大全', link: '/resources/pills/一至九品丹药大全' },
            { text: '丹方大全', link: '/resources/pills/丹方大全' },
            { text: '丹道完整体系', link: '/resources/pills/丹道完整体系' },
            { text: '炼丹工艺详解', link: '/resources/pills/炼丹工艺详解' },
          ]
        },
        {
          text: '法宝体系',
          collapsed: true,
          items: [
            { text: '法宝总览', link: '/resources/artifacts/法宝总览' },
            { text: '法宝等级', link: '/resources/artifacts/法宝等级' },
            { text: '法宝图鉴大全', link: '/resources/artifacts/法宝图鉴大全' },
            { text: '本命法宝', link: '/resources/artifacts/本命法宝' },
            { text: '法宝认主与升级', link: '/resources/artifacts/法宝认主与升级' },
            { text: '仙器魔器', link: '/resources/artifacts/仙器魔器' },
          ]
        },
        {
          text: '武器',
          collapsed: true,
          items: [
            { text: '仙剑', link: '/resources/weapons/仙剑' },
            { text: '仙剑图录', link: '/resources/weapons/仙剑图录' },
            { text: '仙器', link: '/resources/weapons/仙器' },
            { text: '法宝', link: '/resources/weapons/法宝' },
            { text: '魔器', link: '/resources/weapons/魔器' },
            { text: '炼器工艺详解', link: '/resources/weapons/炼器工艺详解' },
          ]
        },
        {
          text: '炼器体系',
          collapsed: true,
          items: [
            { text: '炼器总览', link: '/resources/crafting/炼器总览' },
            { text: '炼器流程', link: '/resources/crafting/炼器流程' },
            { text: '炼器师等级', link: '/resources/crafting/炼器师等级' },
            { text: '材料分类', link: '/resources/crafting/材料分类' },
            { text: '炼器装备体系', link: '/resources/炼器装备体系' },
          ]
        },
        {
          text: '天材地宝',
          collapsed: true,
          items: [
            { text: '天材地宝', link: '/resources/treasures/天材地宝' },
            { text: '灵药灵草', link: '/resources/treasures/灵药灵草' },
            { text: '灵药灵草图鉴', link: '/resources/treasures/灵药灵草图鉴' },
            { text: '矿石金属', link: '/resources/treasures/矿石金属' },
            { text: '稀有材料', link: '/resources/treasures/稀有材料' },
            { text: '异火体系', link: '/resources/treasures/异火体系' },
          ]
        },
        {
          text: '符箓',
          collapsed: true,
          items: [
            { text: '符箓体系', link: '/resources/talismans/符箓体系' },
            { text: '符箓大全', link: '/resources/talismans/符箓大全' },
            { text: '一至九品符箓大全', link: '/resources/talismans/一至九品符箓大全' },
            { text: '常用符箓', link: '/resources/talismans/常用符箓' },
            { text: '符箓图鉴', link: '/resources/talismans/符箓图鉴' },
            { text: '符箓高阶体系', link: '/resources/talismans/符箓高阶体系' },
          ]
        },
      ],
      
      '/factions/': [
        {
          text: '势力组织',
          collapsed: false,
          items: [
            { text: '总览', link: '/factions/' },
            { text: '修仙政治体系', link: '/factions/修仙政治体系' },
            { text: '修仙界社会结构', link: '/factions/修仙界社会结构' },
            { text: '社会阶层', link: '/factions/社会阶层' },
          ]
        },
        {
          text: '宗门制度',
          collapsed: true,
          items: [
            { text: '宗门制度', link: '/factions/宗门制度' },
            { text: '修仙界宗门制度', link: '/factions/修仙界宗门制度' },
            { text: '宗门门派完整体系', link: '/factions/宗门门派完整体系' },
          ]
        },
        {
          text: '宗门细则',
          collapsed: true,
          items: [
            { text: '宗门组织架构细则', link: '/factions/sect-system/宗门组织架构细则' },
            { text: '弟子晋升制度', link: '/factions/sect-system/弟子晋升制度' },
            { text: '宗门戒律与奖惩制度', link: '/factions/sect-system/宗门戒律与奖惩制度' },
            { text: '宗门资源分配制度', link: '/factions/sect-system/宗门资源分配制度' },
            { text: '宗门任务体系细则', link: '/factions/sect-system/宗门任务体系细则' },
            { text: '宗门大比与试炼设定', link: '/factions/sect-system/宗门大比与试炼设定' },
            { text: '宗门护山大阵设定', link: '/factions/sect-system/宗门护山大阵设定' },
            { text: '宗门经济与外交制度', link: '/factions/sect-system/宗门经济与外交制度' },
            { text: '师徒关系细则', link: '/factions/sect-system/师徒关系细则' },
            { text: '道侣婚姻制度细则', link: '/factions/sect-system/道侣婚姻制度细则' },
            { text: '散修生存指南', link: '/factions/sect-system/散修生存指南' },
          ]
        },
        {
          text: '师徒关系',
          collapsed: true,
          items: [
            { text: '师徒关系', link: '/factions/师徒关系' },
            { text: '婚姻制度', link: '/factions/婚姻制度' },
          ]
        },
        {
          text: '正道势力',
          collapsed: true,
          items: [
            { text: '正道宗门设定大全', link: '/factions/righteous/正道宗门设定大全' },
            { text: '道门', link: '/factions/righteous/道门' },
            { text: '剑宗', link: '/factions/righteous/剑宗' },
            { text: '书院', link: '/factions/righteous/书院' },
          ]
        },
        {
          text: '魔道势力',
          collapsed: true,
          items: [
            { text: '魔道宗门设定大全', link: '/factions/demonic/魔道宗门设定大全' },
            { text: '魔门', link: '/factions/demonic/魔门' },
            { text: '邪修', link: '/factions/demonic/邪修' },
          ]
        },
        {
          text: '佛门势力',
          collapsed: true,
          items: [
            { text: '佛门势力设定大全', link: '/factions/buddhist/佛门势力设定大全' },
            { text: '佛寺', link: '/factions/buddhist/佛寺' },
          ]
        },
        {
          text: '妖族势力',
          collapsed: true,
          items: [
            { text: '妖族势力设定大全', link: '/factions/demon/妖族势力设定大全' },
            { text: '万妖国', link: '/factions/demon/万妖国' },
          ]
        },
        {
          text: '中立势力',
          collapsed: true,
          items: [
            { text: '商会组织', link: '/factions/neutral/商会组织' },
            { text: '商会', link: '/factions/neutral/商会' },
            { text: '散修联盟', link: '/factions/neutral/散修联盟' },
            { text: '佣兵公会', link: '/factions/neutral/佣兵公会' },
          ]
        },
        {
          text: '商会',
          collapsed: true,
          items: [
            { text: '商会大全', link: '/factions/guilds/商会大全' },
            { text: '万宝阁', link: '/factions/guilds/万宝阁' },
            { text: '天机阁', link: '/factions/guilds/天机阁' },
          ]
        },
        {
          text: '家族',
          collapsed: true,
          items: [
            { text: '上古家族', link: '/factions/families/上古家族' },
            { text: '修真家族', link: '/factions/families/修真家族' },
            { text: '凡人世家', link: '/factions/families/凡人世家' },
          ]
        },
        {
          text: '任务体系',
          collapsed: true,
          items: [
            { text: '修仙界任务体系', link: '/factions/修仙界任务体系' },
            { text: '散修生存任务体系', link: '/factions/散修生存任务体系' },
          ]
        },
      ],
      
      '/geography/': [
        {
          text: '世界地理',
          collapsed: false,
          items: [
            { text: '总览', link: '/geography/' },
            { text: '世界观总览', link: '/geography/世界观总览' },
            { text: '界面总览', link: '/geography/界面总览' },
          ]
        },
        {
          text: '地图与禁地',
          collapsed: true,
          items: [
            { text: '修仙界地图', link: '/geography/修仙界地图' },
            { text: '修仙界十大禁地', link: '/geography/修仙界十大禁地' },
          ]
        },
        {
          text: '秘境与绝地',
          collapsed: true,
          items: [
            { text: '秘境与绝地详解', link: '/geography/秘境与绝地详解' },
            { text: '各界秘境大全', link: '/geography/各界秘境大全' },
            { text: '各界绝地大全', link: '/geography/各界绝地大全' },
          ]
        },
        {
          text: '秘境',
          collapsed: true,
          items: [
            { text: '秘境图鉴大全', link: '/geography/secret-realms/秘境图鉴大全' },
          ]
        },
      ],
      
      '/creatures/': [
        {
          text: '神兽妖兽',
          collapsed: false,
          items: [
            { text: '总览', link: '/creatures/' },
            { text: '妖兽图鉴大全', link: '/creatures/妖兽图鉴大全' },
            { text: '血脉体系', link: '/creatures/血脉体系' },
          ]
        },
        {
          text: '神兽',
          collapsed: true,
          items: [
            { text: '四灵神兽', link: '/creatures/divine-beasts/四灵神兽' },
            { text: '四大凶兽', link: '/creatures/divine-beasts/四大凶兽' },
          ]
        },
        {
          text: '著名神兽',
          collapsed: true,
          items: [
            { text: '龙族', link: '/creatures/龙族' },
            { text: '凤凰', link: '/creatures/凤凰' },
            { text: '麒麟', link: '/creatures/麒麟' },
          ]
        },
        {
          text: '妖兽',
          collapsed: true,
          items: [
            { text: '普通妖兽', link: '/creatures/普通妖兽' },
            { text: '上古妖兽', link: '/creatures/beasts/上古妖兽' },
            { text: '妖兽等级', link: '/creatures/beasts/妖兽等级' },
            { text: '妖兽进化', link: '/creatures/beasts/妖兽进化' },
            { text: '妖兽栖息地', link: '/creatures/beasts/妖兽栖息地' },
          ]
        },
        {
          text: '灵宠',
          collapsed: true,
          items: [
            { text: '灵宠灵兽体系', link: '/creatures/pets/灵宠灵兽体系' },
          ]
        },
      ],
      
      '/characters/': [
        {
          text: '人物设定',
          collapsed: false,
          items: [
            { text: '总览', link: '/characters/' },
            { text: '人物模板', link: '/characters/人物模板' },
            { text: '名字生成', link: '/characters/名字生成' },
          ]
        },
        {
          text: '人物模板',
          collapsed: true,
          items: [
            { text: '女性角色模板', link: '/characters/女性角色模板' },
            { text: '宗门长老模板', link: '/characters/宗门长老模板' },
            { text: '反派设定', link: '/characters/反派设定' },
          ]
        },
        {
          text: '各界人物',
          collapsed: true,
          items: [
            { text: '修真界著名修士', link: '/characters/修真界著名修士' },
            { text: '仙界重要人物', link: '/characters/仙界重要人物' },
            { text: '魔界人物', link: '/characters/魔界人物' },
            { text: '妖界人物', link: '/characters/妖界人物' },
            { text: '魔修人物', link: '/characters/魔修人物' },
            { text: '散修人物', link: '/characters/散修人物' },
            { text: '上古神话人物', link: '/characters/上古神话人物' },
          ]
        },
        {
          text: '种族设定',
          collapsed: true,
          items: [
            { text: '种族设定总览', link: '/characters/races/种族设定总览' },
            { text: '人族', link: '/characters/races/人族' },
            { text: '妖族', link: '/characters/races/妖族' },
            { text: '魔族', link: '/characters/races/魔族' },
            { text: '魔族血脉', link: '/characters/races/魔族血脉' },
            { text: '鬼族', link: '/characters/races/鬼族' },
            { text: '神族', link: '/characters/races/神族' },
            { text: '神兽血脉', link: '/characters/races/神兽血脉' },
          ]
        },
        {
          text: '特殊体质',
          collapsed: true,
          items: [
            { text: '先天道体', link: '/characters/races/先天道体' },
            { text: '混沌体', link: '/characters/races/混沌体' },
            { text: '太阴之体', link: '/characters/races/太阴之体' },
            { text: '太阳之体', link: '/characters/races/太阳之体' },
            { text: '上古血脉', link: '/characters/races/上古血脉' },
          ]
        },
      ],
      
      '/writing-guide/': [
        {
          text: '写作参考',
          collapsed: false,
          items: [
            { text: '总览', link: '/writing-guide/' },
            { text: '常见误区', link: '/writing-guide/常见误区' },
          ]
        },
        {
          text: '情节设计',
          collapsed: true,
          items: [
            { text: '经典情节模板', link: '/writing-guide/经典情节模板' },
            { text: '情节发展建议', link: '/writing-guide/情节发展建议' },
            { text: '修仙奇遇设定', link: '/writing-guide/修仙奇遇设定' },
            { text: '爽点设计', link: '/writing-guide/爽点设计' },
          ]
        },
        {
          text: '写作技巧',
          collapsed: true,
          items: [
            { text: '文笔技巧', link: '/writing-guide/文笔技巧' },
            { text: '人物设定模板', link: '/writing-guide/人物设定模板' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],

    footer: {
      message: '修仙设定Wiki - 完整的修仙世界设定知识库',
      copyright: '© 2024 修仙设定Wiki'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})