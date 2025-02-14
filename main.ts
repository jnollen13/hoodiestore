namespace SpriteKind {
    export const hoodie1 = SpriteKind.create()
    export const hoodie2 = SpriteKind.create()
    export const hoodie3 = SpriteKind.create()
    export const hoodie4 = SpriteKind.create()
    export const charliehome = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.jump(Render.getRenderSpriteInstance(), 66)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hoodie2, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        game.splash("hoodie bought!")
        sprites.destroy(mySprite2)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.charliehome, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        scene.cameraShake(4, 500)
        Render.setSpriteAttribute(Render.getRenderSpriteInstance(), RCSpriteAttribute.ZOffset, 4)
        mySprite7 = sprites.create(assets.image`Charlie`, SpriteKind.Player)
        tiles.placeOnTile(mySprite7, tiles.getTileLocation(49, 18))
        Render.setViewAngleInDegree(0)
        tiles.placeOnTile(Render.getRenderSpriteInstance(), tiles.getTileLocation(46, 18))
        pause(5000)
        game.setGameOverPlayable(false, music.melodyPlayable(music.footstep), true)
        game.setGameOverMessage(false, "You were bitten by Charlie F.")
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hoodie4, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        game.splash("hoodie bought!")
        sprites.destroy(mySprite4)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hoodie1, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        sprites.destroy(mySprite)
        game.splash("hoodie bought!")
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hoodie3, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        game.splash("hoddie bought!")
        sprites.destroy(mySprite3)
    }
})
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let mySprite5 = sprites.create(assets.image`scroll`, SpriteKind.Player)
tiles.placeOnTile(mySprite5, tiles.getTileLocation(4, 9))
scene.setBackgroundImage(assets.image`bg`)
tiles.setCurrentTilemap(tilemap`level2`)
game.setDialogCursor(assets.image`Jodim`)
for (let index = 0; index < 1; index++) {
    mySprite = sprites.create(assets.image`Jodim hoodie`, SpriteKind.hoodie1)
    mySprite.setVelocity(0, 1000)
    mySprite2 = sprites.create(assets.image`hoodie hoodie`, SpriteKind.hoodie2)
    mySprite2.setVelocity(1000, 0)
    mySprite3 = sprites.create(assets.image`the blade hoodie`, SpriteKind.hoodie3)
    mySprite3.setVelocity(0, -1000)
    mySprite4 = sprites.create(assets.image`the blade hoodie2`, SpriteKind.hoodie4)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(29, 13))
    mySprite6 = sprites.create(assets.image`charlies home`, SpriteKind.charliehome)
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(54, 18))
}
Render.getRenderSpriteInstance().setKind(SpriteKind.Player)
