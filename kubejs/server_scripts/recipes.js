ServerEvents.recipes(event => {
// Goofy spell books recipe change
    event.remove({id: 'ars_nouveau:novice_spell_book'});
    event.remove({id: 'ars_nouveau:apprentice_spell_book_upgrade'});
    event.remove({id: 'ars_nouveau:archmage_spell_book_upgrade'});

    event.recipes.ars_nouveau.enchanting_apparatus(
	['botania:mana_bottle', 'ars_nouveau:source_gem', 'botania:manasteel_block', 'minecraft:feather'],
	'minecraft:book',
	'ars_nouveau:novice_spell_book',
	1000
    );

    event.recipes.ars_nouveau.enchanting_apparatus(
	['minecraft:obsidian', 'botania:elementium_block', 'botania:terrasteel_block', 'minecraft:blaze_rod', 'minecraft:diamond'],
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

    //Changing Ars Nouveau "machines" recipes
    event.remove({output: 'ars_nouveau:imbuement_chamber'});
    event.shaped(Item.of('ars_nouveau:imbuement_chamber', 1),
	[
	    'AMA',
	    'A A',
	    'AMA'
	],{
	    A: 'ars_nouveau:archwood_planks',
	    M: 'botania:manasteel_ingot'});

    event.remove({output: 'ars_nouveau:enchanting_apparatus'});
    event.recipes.botania.runic_altar('ars_nouveau:enchanting_apparatus', ['ars_nouveau:sourcestone', 'ars_nouveau:sourcestone', 'minecraft:diamond', 'minecraft:gold_ingot', 'minecraft:gold_ingot'], 20000);

    //alchemical source link
    event.remove({output: 'ars_nouveau:alchemical_sourcelink'});
    event.recipes.botania.runic_altar('ars_nouveau:alchemical_sourcelink', ['minecraft:gold_ingot', 'minecraft:gold_ingot', 'ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'minecraft:brewing_stand'], 5000);

    //agronomic source link
    event.remove({output: 'ars_nouveau:agronomic_sourcelink'});
    event.recipes.botania.runic_altar('ars_nouveau:agronomic_sourcelink', ['minecraft:gold_ingot', 'minecraft:gold_ingot', 'ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'minecraft:wheat'], 5000);

    //volcanic source link
    event.remove({output: 'ars_nouveau:volcanic_sourcelink'});
    event.recipes.botania.runic_altar('ars_nouveau:volcanic_sourcelink', ['minecraft:gold_ingot', 'minecraft:gold_ingot', 'ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'minecraft:lava_bucket'], 5000);

    //mycelial source link
    event.remove({output: 'ars_nouveau:mycelial_sourcelink'});
    event.recipes.botania.runic_altar('ars_nouveau:mycelial_sourcelink', ['minecraft:gold_ingot', 'minecraft:gold_ingot', 'ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'minecraft:mushroom_stew'], 5000);

    //mycelial source link
    event.remove({output: 'ars_nouveau:vitalic_sourcelink'});
    event.recipes.botania.runic_altar('ars_nouveau:vitalic_sourcelink', ['minecraft:gold_ingot', 'minecraft:gold_ingot', 'ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'minecraft:glistering_melon_slice'], 5000);

    //arcane core
    event.remove({output: 'ars_nouveau:arcane_core'});
    event.recipes.botania.runic_altar('ars_nouveau:arcane_core', ['minecraft:gold_ingot', 'minecraft:gold_ingot', 'ars_nouveau:source_gem', 'ars_nouveau:sourcestone', 'ars_nouveau:sourcestone'], 20000);

//Building Gadgets

    //building gadget
    event.remove({output: 'buildinggadgets2:gadget_building'});
    event.shaped(Item.of( 'buildinggadgets2:gadget_building', 1),
	[
	    'EFE',
	    'LMR',
	    'EUE'
	],{
	    E: 'botania:elementium_ingot',
	    L: 'botania:lens_phantom',
	    R: 'botania:rune_sloth',
	    F: 'botania:rannuncarpus',
	    U: 'botania:mana_fluxfield',
	    M: 'botania:mana_tablet'});

    //exchanging gadget
    event.remove({output: 'buildinggadgets2:gadget_exchanging'});
    event.shaped(Item.of( 'buildinggadgets2:gadget_exchanging', 1),
	[
	    'EFE',
	    'LMR',
	    'EUE'
	],{
	    E: 'botania:elementium_ingot',
	    L: 'botania:lens_phantom',
	    R: 'botania:rune_sloth',
	    F: 'botania:exchange_rod',
	    U: 'botania:mana_fluxfield',
	    M: 'botania:mana_tablet'});

    //copy paste gadget
    event.remove({output: 'buildinggadgets2:gadget_copy_paste'});
    event.shaped(Item.of( 'buildinggadgets2:gadget_copy_paste', 1),
	[
	    'EFE',
	    'LMR',
	    'EUE'
	],{
	    E: 'botania:elementium_ingot',
	    L: 'botania:lens_phantom',
	    R: 'botania:rune_sloth',
	    F: 'botania:astrolabe',
	    U: 'botania:mana_fluxfield',
	    M: 'botania:mana_tablet'});

    //cut paste gadget
    event.remove({output: 'buildinggadgets2:gadget_cut_paste'});
    event.shaped(Item.of( 'buildinggadgets2:gadget_cut_paste', 1),
	[
	    'EFE',
	    'LMR',
	    'EUE'
	],{
	    E: 'botania:elementium_ingot',
	    L: 'botania:lens_phantom',
	    R: 'botania:rune_wrath',
	    F: 'botania:elementium_shears',
	    U: 'botania:mana_fluxfield',
	    M: 'botania:mana_tablet'});

    //destruction gadget
    event.remove({output: 'buildinggadgets2:gadget_destruction'});
    event.shaped(Item.of( 'buildinggadgets2:gadget_destruction', 1),
	[
	    'ERE',
	    'LMR',
	    'EUE'
	],{
	    E: 'botania:elementium_ingot',
	    L: 'botania:lens_phantom',
	    R: 'botania:rune_wrath',
	    U: 'botania:mana_fluxfield',
	    M: 'botania:mana_tablet'});

    //charging station
    event.remove({output: 'charginggadgets:charging_station'});
    event.shaped(Item.of('charginggadgets:charging_station', 1),
	[
	    'EFE',
	    'ESE',
	    'EME'
	],{
	    E: 'botania:elementium_ingot',
	    S: 'botania:spark',
	    F: 'botania:mana_fluxfield',
	    M: 'botania:mana_pool'});

    //template manager
    event.remove({output: 'buildinggadgets2:template_manager'});
    event.shaped(Item.of('buildinggadgets2:template_manager', 1),
	[
	    'EFE',
	    'ESE',
	    'EME'
	],{
	    E: 'botania:elementium_ingot',
	    S: 'botania:rune_sloth',
	    F: 'botania:mana_fluxfield',
	    M: 'botania:mana_pool'});

//Evil craft

    //Blood infuser
    event.remove({output: 'evilcraft:blood_infuser'});
    event.shaped(Item.of('evilcraft:blood_infuser', 1),
	[
	    'AAA',
	    'ABA',
	    'AAA'
	],{
	    A: 'botania:livingrock',
	    B: 'evilcraft:blood_infusion_core'});

    //Blood chest
    event.remove({output: 'evilcraft:blood_chest'});
    event.shaped(Item.of('evilcraft:blood_chest', 1),
    [
	'AAA',
	'ABA',
	'AAA'
    ],{
	A: 'botania:livingwood_log',
	B: 'evilcraft:blood_infusion_core'
    });

    //Spirit Reanimator
    event.remove({output: 'evilcraft:spirit_reanimator'});
    event.shaped(Item.of('evilcraft:spirit_reanimator', 1),
    [
	'ACA',
	'ABA',
	'ADA'
    ],{
	A: 'botania:livingrock',
	B: 'evilcraft:blood_infusion_core',
	C: 'botania:manasteel_ingot',
	D: 'botania:manasteel_block'
    });

    //Vengeance Ring
    event.remove({output: 'evilcraft:vengeance_ring'});
    event.shaped(Item.of('evilcraft:vengeance_ring', 1),
    [
	'ABA',
	'B B',
	'ABA'
    ],{
	A: 'evilcraft:dark_gem_crushed',
	B: 'botania:manasteel_ingot'
    });

    //Vengeance Focus
    event.remove({output: 'evilcraft:vengeance_focus'});
    event.shaped(Item.of('evilcraft:vengeance_focus', 1),
    [
	'ABA',
	'BCB',
	'ABA'
    ],{
	A: 'evilcraft:dark_gem_crushed',
	B: 'botania:manasteel_ingot',
	C: 'evilcraft:vengeance_ring'
    });

    //Vengeance Pickaxe
    event.remove({output: 'evilcraft:vengeance_pickaxe'});
    event.shaped(Item.of('evilcraft:vengeance_pickaxe', 1),
    [
	'ADA',
	'BCB',
	' C '
    ],{
	A: 'evilcraft:hardened_blood_shard',
	B: 'botania:mana_diamond',
	C: 'evilcraft:dark_stick',
	D: 'botania:terrasteel_ingot'
    });

//Gateways

    event.remove({id: 'gateways:basic/blaze'});
    event.shaped(Item.of('gateways:gate_pearl', '{gateway:"gateways:basic/blaze"}'),
    [
	'BBB',
	'BPB',
	'BBB'
    ],{
	P: 'botania:mana_pearl',
	B: 'minecraft:blaze_powder',
    });

    event.remove({id: 'gateways:basic/enderman'});
    event.shaped(Item.of('gateways:gate_pearl', '{gateway:"gateways:basic/enderman"}'),
    [
	'AEA',
	'EME',
	'AEA'
    ],{
	M: 'botania:mana_pearl',
	E: 'minecraft:ender_pearl',
	A: 'minecraft:amethyst_shard'
    });

    event.remove({id: 'gateways:basic/slime'});
    event.shaped(Item.of('gateways:gate_pearl', '{gateway:"gateways:basic/slime"}'),
    [
	'RRR',
	'AMB',
	'PPP'
    ],{
	M: 'botania:mana_pearl',
	A: 'minecraft:red_mushroom',
	B: 'minecraft:brown_mushroom',
	R: 'minecraft:redstone',
	P: Item.of('minecraft:potion','{Potion:"minecraft:water"}')
    });

// Vanilla

    event.shapeless(Item.of('minecraft:dragon_head', 2),
	[
	   'quark:dragon_scale',
	   'minecraft:dragon_head'
    ]);

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
