ServerEvents.recipes(event => {
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
