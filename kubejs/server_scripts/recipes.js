ServerEvents.recipes(event => {
// Goofy spell books recipe change
    event.remove({id: 'ars_nouveau:novice_spell_book'});
    event.remove({id: 'ars_nouveau:apprentice_spell_book_upgrade'});
    event.remove({id: 'ars_nouveau:archmage_spell_book_upgrade'});

    event.recipes.ars_nouveau.enchanting_apparatus(
	['botania:mana_bottle', 'ars_nouveau:source_gem', 'botania:manasteel_ingot', 'minecraft:feather'],
	'minecraft:book',
	'ars_nouveau:novice_spell_book',
	1000
    );

    event.recipes.ars_nouveau.enchanting_apparatus(
	['minecraft:obsidian', 'botania:elementium_ingot', 'minecraft:blaze_rod', 'minecraft:diamond'],
	'ars_nouveau:novice_spell_book',
	'ars_nouveau:apprentice_spell_book',
	4000
    );

    event.recipes.ars_nouveau.enchanting_apparatus(
	['minecraft:nether_star', 'ars_nouveau:wilden_tribute', 'botania:gaia_ingot', 'minecraft:totem_of_undying'],
	'ars_nouveau:apprentice_spell_book',
	'ars_nouveau:archmage_spell_book',
	8000
    );

    //Nuking every gun recipe
    event.remove({output: 'jeg:revolver'});
    event.remove({output: 'jeg:waterpipe_shotgun'});
    event.remove({output: 'jeg:custom_smg'});
    event.remove({output: 'jeg:double_barrel_shotgun'});
    event.remove({output: 'jeg:semi_auto_pistol'});
    event.remove({output: 'jeg:semi_auto_rifle'});
    event.remove({output: 'jeg:assault_rifle'});
    event.remove({output: 'jeg:pump_shotgun'});
    event.remove({output: 'jeg:combat_pistol'});
    event.remove({output: 'jeg:burst_rifle'});
    event.remove({output: 'jeg:combat_rifle'});
    event.remove({output: 'jeg:bolt_action_rifle'});
    event.remove({output: 'jeg:holy_shotgun'});
    event.remove({output: 'jeg:flare_gun'});
    event.remove({output: 'jeg:repeating_shotgun'});
    event.remove({output: 'jeg:infantry_rifle'});
    event.remove({output: 'jeg:service_rifle'});
    event.remove({output: 'jeg:blossom_rifle'});
    event.remove({output: 'jeg:typhoonee'});
    event.remove({output: 'jeg:atlantean_spear'});
    event.remove({output: 'jeg:hollenfire_mk2'});
    event.remove({output: 'jeg:soulhunter_mk2'});
    event.remove({output: 'jeg:subsonic_rifle'});
    event.remove({output: 'jeg:supersonic_shotgun'});
    event.remove({output: 'jeg:hypersonic_cannon'});
    event.remove({output: 'jeg:rocket_launcher'});
    event.remove({output: 'jeg:compound_bow'});
    event.remove({output: 'jeg:grenade_launcher'});
    event.remove({output: 'jeg:light_machine_gun'});
    event.remove({output: 'jeg:flamethrower'});
})
