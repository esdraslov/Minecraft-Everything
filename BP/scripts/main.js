import { world, Player } from '@minecraft/server'

const SaphireStarUsage = {
	onUse(event) {
		if (event.source instanceof Player) {
			event.source.addEffect("resistance", 60, {
				amplifier: 254
			})
		}
	}
}

const SaphireSwordAttack = {
	onHitEntity(event) {
		event.hitEntity.addEffect("slowness", 40, {
			amplifier: 3
		})
	}
}

const SaphirePickaxeMine = {
	onMineBlock(event) {
		const source = event.source
		if (source instanceof Player) {
			source.addEffect("haste", 60, {
				amplifier: 2
			})
		}
	}
}

world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
	itemComponentRegistry.registerCustomComponent("mcevery:saphirestaruse", SaphireStarUsage)
	itemComponentRegistry.registerCustomComponent("mcevery:saphiresworduse", SaphireSwordAttack)
	itemComponentRegistry.registerCustomComponent("mcevery:saphirepickaxeuse", SaphirePickaxeMine)
})
