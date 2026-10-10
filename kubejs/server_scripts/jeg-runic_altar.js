
ServerEvents.recipes(event => {
    //Runic GUUNS

    //Scrap Workbench
    event.recipes.botania.runic_altar('jeg:revolver', ['botania:livingwood_log', 'minecraft:iron_block', 'jeg:scrap_block', 'botania:rune_earth'], 10000);
    event.recipes.botania.runic_altar('jeg:waterpipe_shotgun', ['botania:livingwood_log', 'minecraft:iron_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'botania:rune_water'], 10000)
    event.recipes.botania.runic_altar('jeg:custom_smg', ['botania:livingwood_log', 'minecraft:iron_block', 'minecraft:iron_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'botania:rune_air', 'minecraft:repeater'], 10000)
    event.recipes.botania.runic_altar('jeg:double_barrel_shotgun', ['botania:livingwood_log', 'minecraft:iron_block', 'minecraft:iron_block','minecraft:iron_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'botania:rune_fire', 'minecraft:lever'], 10000)

    //Gunmetal Workbench
    event.recipes.botania.runic_altar('jeg:semi_auto_pistol', ['botania:livingwood_log', 'jeg:scrap_block', 'jeg:gunmetal_block', 'botania:rune_earth'], 12000)
    event.recipes.botania.runic_altar('jeg:semi_auto_rifle', ['botania:livingwood_log', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunmetal_block', 'botania:rune_water'], 12000)
    event.recipes.botania.runic_altar('jeg:assault_rifle', ['botania:livingwood_log', 'botania:livingwood_log', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunmetal_block', 'jeg:gunmetal_block', 'botania:rune_air'], 12000)
    event.recipes.botania.runic_altar('jeg:pump_shotgun', ['minecraft:gunpowder', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunmetal_block', 'jeg:gunmetal_block', 'botania:rune_fire'], 12000)

    //Gunnite Workbench
    event.recipes.botania.runic_altar('jeg:combat_pistol', ['jeg:scrap_block', 'jeg:gunnite_block', 'botania:dreamwood_log','botania:rune_earth'], 16000)
    event.recipes.botania.runic_altar('jeg:burst_rifle', ['jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'minecraft:repeater', 'botania:dreamwood_log', 'botania:rune_summer'], 16000)
    event.recipes.botania.runic_altar('jeg:combat_rifle', ['jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'minecraft:sandstone', 'botania:dreamwood_log', 'botania:rune_autumn'], 16000)
    event.recipes.botania.runic_altar('jeg:bolt_action_rifle', ['jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'minecraft:lever', 'minecraft:gunpowder', 'botania:dreamwood_log', 'botania:rune_spring'], 16000)
    event.recipes.botania.runic_altar('jeg:holy_shotgun', ['jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'minecraft:gold_block', 'jeg:ectoplasm', 'botania:dreamwood_log', 'botania:rune_winter'], 16000)

    //Blueprint guns
    event.recipes.botania.runic_altar('jeg:flare_gun', ['botania:livingwood_log', 'jeg:scrap_block', 'minecraft:iron_block', 'botania:lens_flare','botania:rune_earth'], 10000)
    event.recipes.botania.runic_altar('jeg:repeating_shotgun', ['jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'minecraft:lever', 'botania:dreamwood_log', 'botania:rune_wrath', 'botania:rune_fire'], 16000)
    event.recipes.botania.runic_altar('jeg:infantry_rifle', ['jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'minecraft:lever', 'botania:dreamwood_log', 'botania:rune_water'], 16000)
    event.recipes.botania.runic_altar('jeg:service_rifle', ['jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'jeg:gunmetal_block', 'jeg:gunmetal_block', 'botania:dreamwood_log', 'botania:rune_envy', 'botania:rune_air'], 16000)
    event.recipes.botania.runic_altar('jeg:blossom_rifle', ['jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'botania:dreamwood_log', 'minecraft:pink_petals', 'minecraft:cherry_sapling', 'jeg:ectoplasm', 'botania:rune_water', 'botania:rune_air'], 16000)
    event.recipes.botania.runic_altar('jeg:typhoonee', ['jeg:scrap_block', 'jeg:scrap_block', 'minecraft:heart_of_the_sea', 'minecraft:prismarine_shard', 'minecraft:prismarine_crystals', 'botania:rune_water', 'botania:rune_summer'], 16000)
    event.recipes.botania.runic_altar('jeg:atlantean_spear', ['jeg:scrap_block', 'jeg:scrap_block', 'minecraft:gold_block', 'minecraft:trident', 'minecraft:prismarine_shard', 'minecraft:prismarine_crystals', 'botania:rune_water', 'botania:rune_summer'], 16000)
    event.recipes.botania.runic_altar('jeg:hollenfire_mk2', ['jeg:service_rifle', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'minecraft:blaze_rod', 'minecraft:nether_wart_block', 'minecraft:netherite_ingot', 'botania:rune_wrath', 'botania:rune_fire'], 16000)
    event.recipes.botania.runic_altar('jeg:soulhunter_mk2', ['jeg:assault_rifle', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'minecraft:soul_sand', 'minecraft:warped_wart_block', 'minecraft:netherite_ingot', 'minecraft:soul_lantern', 'botania:rune_wrath', 'botania:rune_air'], 16000)
    event.recipes.botania.runic_altar('jeg:subsonic_rifle', ['jeg:semi_auto_rifle', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'minecraft:bone', 'jeg:silencer', 'botania:rune_water', 'botania:rune_air'], 16000)
    event.recipes.botania.runic_altar('jeg:supersonic_shotgun', ['jeg:pump_shotgun', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'minecraft:sculk', 'minecraft:bone', 'botania:rune_wrath', 'botania:rune_fire'], 16000)
    event.recipes.botania.runic_altar('jeg:hypersonic_cannon', ['minecraft:sculk_shrieker', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'minecraft:sculk', 'botania:rune_wrath', 'botania:rune_envy'], 16000)
    event.recipes.botania.runic_altar('jeg:rocket_launcher', ['minecraft:iron_block', 'minecraft:iron_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'minecraft:lever', 'botania:rune_wrath'], 16000)
    event.recipes.botania.runic_altar('jeg:compound_bow', ['minecraft:iron_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'botania:crystal_bow', 'botania:rune_air'], 16000)
    event.recipes.botania.runic_altar('jeg:grenade_launcher', ['botania:dreamwood_log', 'minecraft:iron_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'minecraft:lever', 'botania:rune_wrath', 'botania:rune_pride'], 16000)
    event.recipes.botania.runic_altar('jeg:light_machine_gun', ['minecraft:iron_block', 'minecraft:iron_block', 'minecraft:iron_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'jeg:gunnite_block', 'botania:rune_pride', 'botania:rune_summer'], 16000)
    event.recipes.botania.runic_altar('jeg:flamethrower', ['jeg:hollenfire_mk2', 'minecraft:warped_stem', 'minecraft:netherite_ingot', 'minecraft:blaze_rod', 'minecraft:bucket', 'jeg:gunnite_block', 'jeg:gunnite_block','jeg:scrap_block', 'jeg:scrap_block', 'jeg:scrap_block', 'botania:rune_wrath', 'botania:rune_fire'], 16000)
})
