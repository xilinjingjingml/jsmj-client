import { izx } from "../framework/izx"

export namespace scmjUtil {   
  
  export function pathNode(name, mapPaths, parent): cc.Node {
    let node = null
    for(let key in mapPaths){
      node = cc.find(mapPaths[key] + name, parent)
      if (node) {
        break
      }
    }
    if (node) {
      return node
    } else {
      console.log("pathNode did't find node of name ", name)
      return null
    }
  }

  export function addIntoPath(name, mapPaths, parent, child) {
    console.log("addIntoPath name ", name)
    let node = this.pathNode(name, mapPaths, parent)
    if (node) {
      node.removeAllChildren()
      node.addChild(child)
    }
  }

  export function preLoadPic(callback) {
    let bundle = cc.assetManager.getBundle("scmj")
    // cc.assetManager.loadBundle("scmj",(err, bundle)=>{
    bundle.loadDir("pics/atlas_images/preload", (err, bundle)=>{
        callback()
      })
  //  });
  }


  export function loadPic(pathName):cc.SpriteFrame {
    let bundle = cc.assetManager.getBundle("scmj")
    if (bundle) {
      let asset = bundle.get(pathName, cc.SpriteFrame)
      if (asset) {
        return <cc.SpriteFrame>asset
      } else {
        return null
      }
    } else {
      return null
    }
  }

  export function loadRes(pathName, callback) {
    let bundle = cc.assetManager.getBundle("scmj")
    if (bundle) {
      let asset = bundle.get(pathName)
      if (asset) {
        callback(asset)
      } else {
        bundle.load(pathName, (err, res)=>{
          if (err) {
            callback()
          } else {
            callback(res)
          }
        })
      }
    } else {
      cc.assetManager.loadBundle("scmj", (err, bundle) => {
        bundle.load(pathName, (err1, res) => {
          if (err1) {
            callback()
          } else {
            callback(res)
          }
        })
      });
    }
  }

  export function playDiceAni(vecDices, parent, callback) {
    izx.log("playDiceAni")
    loadRes("pics/dice/ani", (res)=> {
      if (!res) {
        callback()
        return
      }
      for (let key in vecDices) {
        let nPoint = vecDices[key]
        let sRect 		= cc.rect(0,0,900,1932)
        let size 		  = cc.size(0, 0)
        let offset 		= cc.v2(0, 0)
        let frames 		= []
        for (let i = 0; i < 9; ++i) {
          size.width = 100
          size.height = 322
          let width = 100
          let height = 322
          let orgPoint = sRect.origin
          let rect = cc.rect(orgPoint.x+((nPoint-1)*9+i)%9*100,orgPoint.y+Math.floor(((nPoint-1)*9+i)/9)%6*322, size.width,size.height)
          frames[i] = new cc.SpriteFrame(res, rect, false, offset, size)  
        }
        let nodeDice = new cc.Node();
        nodeDice.name = 'NodeDice';
        let sprite = nodeDice.addComponent(cc.Sprite);
        sprite.spriteFrame = frames[8]
        nodeDice.parent = parent;
        nodeDice.x = (key == "1" ? -40 : 60)
        nodeDice.y = 180
        let animation = nodeDice.addComponent(cc.Animation);
        let clip = cc.AnimationClip.createWithSpriteFrames(frames, 9);
        clip.name = 'anim_dice';
        clip.wrapMode = cc.WrapMode.Default;
        clip.speed = 2
        animation.addClip(clip)
        animation.on('finished', ()=>{
          nodeDice.runAction(cc.sequence(cc.delayTime(1.0), cc.callFunc(callback), cc.removeSelf(true)))
        })
        animation.play("anim_dice")
      }
    })
  }
}