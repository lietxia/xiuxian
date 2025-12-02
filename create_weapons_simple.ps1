# 设置文件夹路径
$basePath = "d:\code\xiuxian\资源物品\武器"
$firstRankPath = Join-Path $basePath "一阶法宝"
$secondRankPath = Join-Path $basePath "二阶法宝"

# 创建文件夹
if (-not (Test-Path $firstRankPath)) {
    New-Item -ItemType Directory -Path $firstRankPath -Force | Out-Null
}
if (-not (Test-Path $secondRankPath)) {
    New-Item -ItemType Directory -Path $secondRankPath -Force | Out-Null
}

# 生成一阶武器文件
$firstRankWeapons = @(
    "法剑", "宝刀", "长枪", "铁棍", "战斧", "飞镖", "飞刀", "软鞭", "双锤", "法棍"
)

foreach ($weapon in $firstRankWeapons) {
    $fileName = Join-Path $firstRankPath "$weapon.md"
    
    # 生成30种武器类型
    $typesContent = ""
    for ($i=1; $i -le 30; $i++) {
        $typeName = "$weapon$i"
        $typesContent += "### $i. $typeName

- **功效**：能够攻击敌人，造成物理伤害
- **适用阶段**：练气期1-10层
- **炼制材料**：
  - 玄铁（10斤）
  - 普通灵石（5块）
  - 炼器炉（1个）
- **炼制难度**：入门级
- **炼制成功率**：约85%

"
    }
    
    $content = "# 一阶$weapon

一阶$weapon是修仙者最基础的$weapon，主要用于攻击敌人，帮助修仙者在战斗中获得优势。

## 一阶$weapon的定义和特点

### 1. 定义

- **一阶$weapon**：专门用于攻击敌人的一阶法宝，能够帮助修仙者在战斗中获得优势。

### 2. 特点

- **攻击敌人**：能够攻击练气期及以下的敌人
- **威力较小**：威力较小，只能造成轻微伤害
- **消耗灵气少**：只需要少量的灵气就能使用
- **炼制简单**：炼制难度低，适合入门级炼器师炼制
- **价格便宜**：适合低级修仙者使用

## 一阶$weapon的种类

$typesContent
## 一阶$weapon的炼制

### 1. 炼制材料

- **基础材料**：各种低级金属、普通灵石、炼器炉等
- **辅助材料**：低级炼器书、炼器工具等

### 2. 炼制难度

- 炼制难度低，适合入门级炼器师炼制
- 不需要特殊的炼器技巧，只需要掌握基础的炼器知识

### 3. 炼制成功率

- 一阶$weapon的炼制成功率较高，通常在80%以上
- 炼制成功率取决于炼器师的水平、炼器材料的质量、炼器炉的品质等因素

## 一阶$weapon的使用方法

### 1. 直接使用

- 最常见的使用方法，直接将$weapon拿在手中使用
- 可以进行物理攻击，也可以注入灵气进行法术攻击

### 2. 辅助使用

- 在战斗中辅助使用，配合其他攻击手段
- 例如：先使用$weapon攻击敌人，然后使用法术攻击敌人

## 一阶$weapon的注意事项

### 1. 安全使用

- 使用$weapon时，需要注意安全，避免伤害到自己或他人
- $weapon的攻击范围有限，需要注意攻击距离
- $weapon的威力较小，适合攻击练气期及以下的敌人

### 2. 灵气消耗

- 使用一阶$weapon进行法术攻击需要消耗少量的灵气
- 低级修仙者需要注意灵气的消耗，避免灵气不足
- 可以通过普通灵石来补充灵气

### 3. 维护保养

- $weapon需要定期维护保养，否则会影响其性能和寿命
- 可以通过注入灵气来修复损坏的$weapon
- 可以通过打磨来保持$weapon的锋利度

## 一阶$weapon的市场价格

- **普通$weapon**：50块普通灵石/把
- **上品$weapon**：100块普通灵石/把

一阶$weapon是修仙者最基础的攻击法宝，选择适合自己的$weapon，能够在战斗中攻击敌人，获得优势，轻松击败敌人。"
    
    Set-Content -Path $fileName -Value $content -Encoding UTF8
    Write-Host "生成了一阶$weapon文件"
}

# 生成二阶武器文件
$secondRankWeapons = @(
    "法剑", "宝刀", "长枪", "铁棍", "战斧"
)

foreach ($weapon in $secondRankWeapons) {
    $fileName = Join-Path $secondRankPath "$weapon.md"
    
    # 生成20种武器类型
    $typesContent = ""
    for ($i=1; $i -le 20; $i++) {
        $typeName = "二阶$weapon$i"
        $typesContent += "### $i. $typeName

- **功效**：能够攻击敌人，造成物理伤害和法术伤害
- **适用阶段**：筑基期1-5层
- **炼制材料**：
  - 精铁（15斤）
  - 中级灵石（8块）
  - 炼器炉（1个）
- **炼制难度**：中级
- **炼制成功率**：约75%

"
    }
    
    $content = "# 二阶$weapon

二阶$weapon是修仙者进阶的$weapon，主要用于攻击敌人，帮助修仙者在战斗中获得更大的优势。

## 二阶$weapon的定义和特点

### 1. 定义

- **二阶$weapon**：专门用于攻击敌人的二阶法宝，能够帮助修仙者在战斗中获得更大的优势。

### 2. 特点

- **攻击敌人**：能够攻击筑基期及以下的敌人
- **威力较大**：威力较大，能够造成中等伤害
- **消耗灵气适中**：需要中等量的灵气就能使用
- **炼制中等**：炼制难度中等，适合中级炼器师炼制
- **价格适中**：适合中级修仙者使用

## 二阶$weapon的种类

$typesContent
## 二阶$weapon的炼制

### 1. 炼制材料

- **基础材料**：各种中级金属、中级灵石、中级炼器炉等
- **辅助材料**：中级炼器书、中级炼器工具等

### 2. 炼制难度

- 炼制难度中等，适合中级炼器师炼制
- 需要掌握一定的炼器技巧，只需要掌握中级的炼器知识

### 3. 炼制成功率

- 二阶$weapon的炼制成功率中等，通常在70%以上
- 炼制成功率取决于炼器师的水平、炼器材料的质量、炼器炉的品质等因素

## 二阶$weapon的使用方法

### 1. 直接使用

- 最常见的使用方法，直接将$weapon拿在手中使用
- 可以进行物理攻击，也可以注入灵气进行法术攻击

### 2. 辅助使用

- 在战斗中辅助使用，配合其他攻击手段
- 例如：先使用$weapon攻击敌人，然后使用法术攻击敌人

## 二阶$weapon的注意事项

### 1. 安全使用

- 使用$weapon时，需要注意安全，避免伤害到自己或他人
- $weapon的攻击范围有限，需要注意攻击距离
- $weapon的威力较大，适合攻击筑基期及以下的敌人

### 2. 灵气消耗

- 使用二阶$weapon进行法术攻击需要消耗中等量的灵气
- 中级修仙者需要注意灵气的消耗，避免灵气不足
- 可以通过中级灵石来补充灵气

### 3. 维护保养

- $weapon需要定期维护保养，否则会影响其性能和寿命
- 可以通过注入灵气来修复损坏的$weapon
- 可以通过打磨来保持$weapon的锋利度

## 二阶$weapon的市场价格

- **普通$weapon**：150块普通灵石/把
- **上品$weapon**：250块普通灵石/把

二阶$weapon是修仙者进阶的攻击法宝，选择适合自己的$weapon，能够在战斗中攻击敌人，获得更大的优势，轻松击败敌人。"
    
    Set-Content -Path $fileName -Value $content -Encoding UTF8
    Write-Host "生成了二阶$weapon文件"
}

Write-Host "所有武器文件生成完成！"