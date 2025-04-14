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

world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
	itemComponentRegistry.registerCustomComponent("mcevery:saphirestaruse", SaphireStarUsage)
	itemComponentRegistry.registerCustomComponent("mcevery:saphiresworduse", SaphireSwordAttack)
})
