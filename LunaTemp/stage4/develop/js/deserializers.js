var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointSpring' )
  var i495 = data
  i494.spring = i495[0]
  i494.damper = i495[1]
  i494.targetPosition = i495[2]
  return i494
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointMotor' )
  var i497 = data
  i496.m_TargetVelocity = i497[0]
  i496.m_Force = i497[1]
  i496.m_FreeSpin = i497[2]
  return i496
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointLimits' )
  var i499 = data
  i498.m_Min = i499[0]
  i498.m_Max = i499[1]
  i498.m_Bounciness = i499[2]
  i498.m_BounceMinVelocity = i499[3]
  i498.m_ContactDistance = i499[4]
  i498.minBounce = i499[5]
  i498.maxBounce = i499[6]
  return i498
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointDrive' )
  var i501 = data
  i500.m_PositionSpring = i501[0]
  i500.m_PositionDamper = i501[1]
  i500.m_MaximumForce = i501[2]
  i500.m_UseAcceleration = i501[3]
  return i500
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i503 = data
  i502.m_Spring = i503[0]
  i502.m_Damper = i503[1]
  return i502
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i505 = data
  i504.m_Limit = i505[0]
  i504.m_Bounciness = i505[1]
  i504.m_ContactDistance = i505[2]
  return i504
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i507 = data
  i506.m_ExtremumSlip = i507[0]
  i506.m_ExtremumValue = i507[1]
  i506.m_AsymptoteSlip = i507[2]
  i506.m_AsymptoteValue = i507[3]
  i506.m_Stiffness = i507[4]
  return i506
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i509 = data
  i508.m_LowerAngle = i509[0]
  i508.m_UpperAngle = i509[1]
  return i508
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i511 = data
  i510.m_MotorSpeed = i511[0]
  i510.m_MaximumMotorTorque = i511[1]
  return i510
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i513 = data
  i512.m_DampingRatio = i513[0]
  i512.m_Frequency = i513[1]
  i512.m_Angle = i513[2]
  return i512
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i515 = data
  i514.m_LowerTranslation = i515[0]
  i514.m_UpperTranslation = i515[1]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i517 = data
  i516.name = i517[0]
  i516.halfPrecision = !!i517[1]
  i516.useSimplification = !!i517[2]
  i516.useUInt32IndexFormat = !!i517[3]
  i516.vertexCount = i517[4]
  i516.aabb = i517[5]
  var i519 = i517[6]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( !!i519[i + 0] );
  }
  i516.streams = i518
  i516.vertices = i517[7]
  var i521 = i517[8]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i521[i + 0]) );
  }
  i516.subMeshes = i520
  var i523 = i517[9]
  var i522 = []
  for(var i = 0; i < i523.length; i += 16) {
    i522.push( new pc.Mat4().setData(i523[i + 0], i523[i + 1], i523[i + 2], i523[i + 3],  i523[i + 4], i523[i + 5], i523[i + 6], i523[i + 7],  i523[i + 8], i523[i + 9], i523[i + 10], i523[i + 11],  i523[i + 12], i523[i + 13], i523[i + 14], i523[i + 15]) );
  }
  i516.bindposes = i522
  var i525 = i517[10]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i525[i + 0]) );
  }
  i516.blendShapes = i524
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i531 = data
  i530.triangles = i531[0]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i537 = data
  i536.name = i537[0]
  var i539 = i537[1]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i539[i + 0]) );
  }
  i536.frames = i538
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i540 = root || new pc.UnityMaterial()
  var i541 = data
  i540.name = i541[0]
  request.r(i541[1], i541[2], 0, i540, 'shader')
  i540.renderQueue = i541[3]
  i540.enableInstancing = !!i541[4]
  var i543 = i541[5]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i543[i + 0]) );
  }
  i540.floatParameters = i542
  var i545 = i541[6]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i545[i + 0]) );
  }
  i540.colorParameters = i544
  var i547 = i541[7]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i547[i + 0]) );
  }
  i540.vectorParameters = i546
  var i549 = i541[8]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i549[i + 0]) );
  }
  i540.textureParameters = i548
  var i551 = i541[9]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i551[i + 0]) );
  }
  i540.materialFlags = i550
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i555 = data
  i554.name = i555[0]
  i554.value = i555[1]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i559 = data
  i558.name = i559[0]
  i558.value = new pc.Color(i559[1], i559[2], i559[3], i559[4])
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i563 = data
  i562.name = i563[0]
  i562.value = new pc.Vec4( i563[1], i563[2], i563[3], i563[4] )
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i567 = data
  i566.name = i567[0]
  request.r(i567[1], i567[2], 0, i566, 'value')
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i571 = data
  i570.name = i571[0]
  i570.enabled = !!i571[1]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i573 = data
  i572.name = i573[0]
  i572.width = i573[1]
  i572.height = i573[2]
  i572.mipmapCount = i573[3]
  i572.anisoLevel = i573[4]
  i572.filterMode = i573[5]
  i572.hdr = !!i573[6]
  i572.format = i573[7]
  i572.wrapMode = i573[8]
  i572.alphaIsTransparency = !!i573[9]
  i572.alphaSource = i573[10]
  i572.graphicsFormat = i573[11]
  i572.sRGBTexture = !!i573[12]
  i572.desiredColorSpace = i573[13]
  i572.wrapU = i573[14]
  i572.wrapV = i573[15]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i575 = data
  i574.name = i575[0]
  i574.index = i575[1]
  i574.startup = !!i575[2]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i577 = data
  i576.aspect = i577[0]
  i576.orthographic = !!i577[1]
  i576.orthographicSize = i577[2]
  i576.backgroundColor = new pc.Color(i577[3], i577[4], i577[5], i577[6])
  i576.nearClipPlane = i577[7]
  i576.farClipPlane = i577[8]
  i576.fieldOfView = i577[9]
  i576.depth = i577[10]
  i576.clearFlags = i577[11]
  i576.cullingMask = i577[12]
  i576.rect = i577[13]
  request.r(i577[14], i577[15], 0, i576, 'targetTexture')
  i576.usePhysicalProperties = !!i577[16]
  i576.focalLength = i577[17]
  i576.sensorSize = new pc.Vec2( i577[18], i577[19] )
  i576.lensShift = new pc.Vec2( i577[20], i577[21] )
  i576.gateFit = i577[22]
  i576.commandBufferCount = i577[23]
  i576.cameraType = i577[24]
  i576.enabled = !!i577[25]
  return i576
}

Deserializers["UnityEngine.EventSystems.Physics2DRaycaster"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.EventSystems.Physics2DRaycaster' )
  var i579 = data
  i578.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i579[0] )
  i578.m_MaxRayIntersections = i579[1]
  return i578
}

Deserializers["CameraController"] = function (request, data, root) {
  var i580 = root || request.c( 'CameraController' )
  var i581 = data
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i583 = data
  i582.name = i583[0]
  i582.tagId = i583[1]
  i582.enabled = !!i583[2]
  i582.isStatic = !!i583[3]
  i582.layer = i583[4]
  return i582
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'm_FirstSelected')
  i584.m_sendNavigationEvents = !!i585[2]
  i584.m_DragThreshold = i585[3]
  return i584
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i587 = data
  i586.m_HorizontalAxis = i587[0]
  i586.m_VerticalAxis = i587[1]
  i586.m_SubmitButton = i587[2]
  i586.m_CancelButton = i587[3]
  i586.m_InputActionsPerSecond = i587[4]
  i586.m_RepeatDelay = i587[5]
  i586.m_ForceModuleActive = !!i587[6]
  i586.m_SendPointerHoverToParent = !!i587[7]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'sharedMesh')
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'additionalVertexStreams')
  i590.enabled = !!i591[2]
  request.r(i591[3], i591[4], 0, i590, 'sharedMaterial')
  var i593 = i591[5]
  var i592 = []
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 2, i592, '')
  }
  i590.sharedMaterials = i592
  i590.receiveShadows = !!i591[6]
  i590.shadowCastingMode = i591[7]
  i590.sortingLayerID = i591[8]
  i590.sortingOrder = i591[9]
  i590.lightmapIndex = i591[10]
  i590.lightmapSceneIndex = i591[11]
  i590.lightmapScaleOffset = new pc.Vec4( i591[12], i591[13], i591[14], i591[15] )
  i590.lightProbeUsage = i591[16]
  i590.reflectionProbeUsage = i591[17]
  return i590
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i596 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i597 = data
  i596.loop = !!i597[0]
  i596.timeScale = i597[1]
  request.r(i597[2], i597[3], 0, i596, 'skeletonDataAsset')
  i596.initialSkinName = i597[4]
  i596.initialFlipX = !!i597[5]
  i596.initialFlipY = !!i597[6]
  var i599 = i597[7]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( i599[i + 0] );
  }
  i596.separatorSlotNames = i598
  i596.zSpacing = i597[8]
  i596.useClipping = !!i597[9]
  i596.immutableTriangles = !!i597[10]
  i596.pmaVertexColors = !!i597[11]
  i596.clearStateOnDisable = !!i597[12]
  i596.tintBlack = !!i597[13]
  i596.singleSubmesh = !!i597[14]
  i596.addNormals = !!i597[15]
  i596.calculateTangents = !!i597[16]
  i596.logErrors = !!i597[17]
  i596.disableRenderingOnOverride = !!i597[18]
  i596._animationName = i597[19]
  return i596
}

Deserializers["DiggyPlayable.WaterPipeGame.WaterPipeGameView"] = function (request, data, root) {
  var i602 = root || request.c( 'DiggyPlayable.WaterPipeGame.WaterPipeGameView' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, '_puzzlePanel')
  request.r(i603[2], i603[3], 0, i602, '_endScreenView')
  request.r(i603[4], i603[5], 0, i602, '_tutorialController')
  request.r(i603[6], i603[7], 0, i602, '_diggyController')
  var i605 = i603[8]
  var i604 = []
  for(var i = 0; i < i605.length; i += 2) {
  request.r(i605[i + 0], i605[i + 1], 2, i604, '')
  }
  i602._pipes = i604
  request.r(i603[9], i603[10], 0, i602, '_waterLandscape')
  request.r(i603[11], i603[12], 0, i602, '_waterPortrait')
  request.r(i603[13], i603[14], 0, i602, '_timer')
  request.r(i603[15], i603[16], 0, i602, '_collectRewardsHintCG')
  request.r(i603[17], i603[18], 0, i602, '_collectRewardsBackgroundTint')
  request.r(i603[19], i603[20], 0, i602, '_collectRewardsHintHand')
  request.r(i603[21], i603[22], 0, i602, '_collectRewardsHintHandCG')
  request.r(i603[23], i603[24], 0, i602, '_treasureChest_Landscape')
  request.r(i603[25], i603[26], 0, i602, '_treasureChest_Portrait')
  i602._ease = i603[27]
  i602._duration = i603[28]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i609 = data
  i608.color = new pc.Color(i609[0], i609[1], i609[2], i609[3])
  request.r(i609[4], i609[5], 0, i608, 'sprite')
  i608.flipX = !!i609[6]
  i608.flipY = !!i609[7]
  i608.drawMode = i609[8]
  i608.size = new pc.Vec2( i609[9], i609[10] )
  i608.tileMode = i609[11]
  i608.adaptiveModeThreshold = i609[12]
  i608.maskInteraction = i609[13]
  i608.spriteSortPoint = i609[14]
  i608.enabled = !!i609[15]
  request.r(i609[16], i609[17], 0, i608, 'sharedMaterial')
  var i611 = i609[18]
  var i610 = []
  for(var i = 0; i < i611.length; i += 2) {
  request.r(i611[i + 0], i611[i + 1], 2, i610, '')
  }
  i608.sharedMaterials = i610
  i608.receiveShadows = !!i609[19]
  i608.shadowCastingMode = i609[20]
  i608.sortingLayerID = i609[21]
  i608.sortingOrder = i609[22]
  i608.lightmapIndex = i609[23]
  i608.lightmapSceneIndex = i609[24]
  i608.lightmapScaleOffset = new pc.Vec4( i609[25], i609[26], i609[27], i609[28] )
  i608.lightProbeUsage = i609[29]
  i608.reflectionProbeUsage = i609[30]
  return i608
}

Deserializers["TreasureChest"] = function (request, data, root) {
  var i612 = root || request.c( 'TreasureChest' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, '_chest')
  request.r(i613[2], i613[3], 0, i612, '_lock')
  i612._orientation = i613[4]
  return i612
}

Deserializers["DiggyPlayable.WaterPipeGame.WaterPipe"] = function (request, data, root) {
  var i614 = root || request.c( 'DiggyPlayable.WaterPipeGame.WaterPipe' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'Reward')
  i614.RewardCollected = !!i615[2]
  i614._isLong = !!i615[3]
  request.r(i615[4], i615[5], 0, i614, '_clickSensor')
  request.r(i615[6], i615[7], 0, i614, '_pipeVisual')
  i614._correctRotations = i615[8]
  i614._maskPositionEmpty = new pc.Vec2( i615[9], i615[10] )
  i614._maskScaleEmpty = new pc.Vec2( i615[11], i615[12] )
  i614._maskPositionFull = new pc.Vec2( i615[13], i615[14] )
  i614._maskScaleFull = new pc.Vec2( i615[15], i615[16] )
  request.r(i615[17], i615[18], 0, i614, '_waterMask')
  i614._waterRunsOtherWay = !!i615[19]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i617 = data
  i616.frontSortingLayerID = i617[0]
  i616.frontSortingOrder = i617[1]
  i616.backSortingLayerID = i617[2]
  i616.backSortingOrder = i617[3]
  i616.alphaCutoff = i617[4]
  request.r(i617[5], i617[6], 0, i616, 'sprite')
  i616.tileMode = i617[7]
  i616.isCustomRangeActive = !!i617[8]
  i616.spriteSortPoint = i617[9]
  i616.enabled = !!i617[10]
  request.r(i617[11], i617[12], 0, i616, 'sharedMaterial')
  var i619 = i617[13]
  var i618 = []
  for(var i = 0; i < i619.length; i += 2) {
  request.r(i619[i + 0], i619[i + 1], 2, i618, '')
  }
  i616.sharedMaterials = i618
  i616.receiveShadows = !!i617[14]
  i616.shadowCastingMode = i617[15]
  i616.sortingLayerID = i617[16]
  i616.sortingOrder = i617[17]
  i616.lightmapIndex = i617[18]
  i616.lightmapSceneIndex = i617[19]
  i616.lightmapScaleOffset = new pc.Vec4( i617[20], i617[21], i617[22], i617[23] )
  i616.lightProbeUsage = i617[24]
  i616.reflectionProbeUsage = i617[25]
  return i616
}

Deserializers["DiggyPlayable.WaterPipeGame.PipeClickSensor"] = function (request, data, root) {
  var i620 = root || request.c( 'DiggyPlayable.WaterPipeGame.PipeClickSensor' )
  var i621 = data
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i623 = data
  i622.usedByComposite = !!i623[0]
  i622.autoTiling = !!i623[1]
  i622.size = new pc.Vec2( i623[2], i623[3] )
  i622.edgeRadius = i623[4]
  i622.enabled = !!i623[5]
  i622.isTrigger = !!i623[6]
  i622.usedByEffector = !!i623[7]
  i622.density = i623[8]
  i622.offset = new pc.Vec2( i623[9], i623[10] )
  request.r(i623[11], i623[12], 0, i622, 'material')
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i625 = data
  i624.pivot = new pc.Vec2( i625[0], i625[1] )
  i624.anchorMin = new pc.Vec2( i625[2], i625[3] )
  i624.anchorMax = new pc.Vec2( i625[4], i625[5] )
  i624.sizeDelta = new pc.Vec2( i625[6], i625[7] )
  i624.anchoredPosition3D = new pc.Vec3( i625[8], i625[9], i625[10] )
  i624.rotation = new pc.Quat(i625[11], i625[12], i625[13], i625[14])
  i624.scale = new pc.Vec3( i625[15], i625[16], i625[17] )
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i627 = data
  i626.planeDistance = i627[0]
  i626.referencePixelsPerUnit = i627[1]
  i626.isFallbackOverlay = !!i627[2]
  i626.renderMode = i627[3]
  i626.renderOrder = i627[4]
  i626.sortingLayerName = i627[5]
  i626.sortingOrder = i627[6]
  i626.scaleFactor = i627[7]
  request.r(i627[8], i627[9], 0, i626, 'worldCamera')
  i626.overrideSorting = !!i627[10]
  i626.pixelPerfect = !!i627[11]
  i626.targetDisplay = i627[12]
  i626.overridePixelPerfect = !!i627[13]
  i626.enabled = !!i627[14]
  return i626
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i629 = data
  i628.m_UiScaleMode = i629[0]
  i628.m_ReferencePixelsPerUnit = i629[1]
  i628.m_ScaleFactor = i629[2]
  i628.m_ReferenceResolution = new pc.Vec2( i629[3], i629[4] )
  i628.m_ScreenMatchMode = i629[5]
  i628.m_MatchWidthOrHeight = i629[6]
  i628.m_PhysicalUnit = i629[7]
  i628.m_FallbackScreenDPI = i629[8]
  i628.m_DefaultSpriteDPI = i629[9]
  i628.m_DynamicPixelsPerUnit = i629[10]
  i628.m_PresetInfoIsWorld = !!i629[11]
  return i628
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i631 = data
  i630.m_IgnoreReversedGraphics = !!i631[0]
  i630.m_BlockingObjects = i631[1]
  i630.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i631[2] )
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i633 = data
  i632.cullTransparentMesh = !!i633[0]
  return i632
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.Image' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_Sprite')
  i634.m_Type = i635[2]
  i634.m_PreserveAspect = !!i635[3]
  i634.m_FillCenter = !!i635[4]
  i634.m_FillMethod = i635[5]
  i634.m_FillAmount = i635[6]
  i634.m_FillClockwise = !!i635[7]
  i634.m_FillOrigin = i635[8]
  i634.m_UseSpriteMesh = !!i635[9]
  i634.m_PixelsPerUnitMultiplier = i635[10]
  request.r(i635[11], i635[12], 0, i634, 'm_Material')
  i634.m_Maskable = !!i635[13]
  i634.m_Color = new pc.Color(i635[14], i635[15], i635[16], i635[17])
  i634.m_RaycastTarget = !!i635[18]
  i634.m_RaycastPadding = new pc.Vec4( i635[19], i635[20], i635[21], i635[22] )
  return i634
}

Deserializers["DrowningTimer"] = function (request, data, root) {
  var i636 = root || request.c( 'DrowningTimer' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, '_timerFill')
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i639 = data
  i638.m_Alpha = i639[0]
  i638.m_Interactable = !!i639[1]
  i638.m_BlocksRaycasts = !!i639[2]
  i638.m_IgnoreParentGroups = !!i639[3]
  i638.enabled = !!i639[4]
  return i638
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i640 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i641 = data
  i640.m_hasFontAssetChanged = !!i641[0]
  request.r(i641[1], i641[2], 0, i640, 'm_baseMaterial')
  i640.m_maskOffset = new pc.Vec4( i641[3], i641[4], i641[5], i641[6] )
  i640.m_text = i641[7]
  i640.m_isRightToLeft = !!i641[8]
  request.r(i641[9], i641[10], 0, i640, 'm_fontAsset')
  request.r(i641[11], i641[12], 0, i640, 'm_sharedMaterial')
  var i643 = i641[13]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i640.m_fontSharedMaterials = i642
  request.r(i641[14], i641[15], 0, i640, 'm_fontMaterial')
  var i645 = i641[16]
  var i644 = []
  for(var i = 0; i < i645.length; i += 2) {
  request.r(i645[i + 0], i645[i + 1], 2, i644, '')
  }
  i640.m_fontMaterials = i644
  i640.m_fontColor32 = UnityEngine.Color32.ConstructColor(i641[17], i641[18], i641[19], i641[20])
  i640.m_fontColor = new pc.Color(i641[21], i641[22], i641[23], i641[24])
  i640.m_enableVertexGradient = !!i641[25]
  i640.m_colorMode = i641[26]
  i640.m_fontColorGradient = request.d('TMPro.VertexGradient', i641[27], i640.m_fontColorGradient)
  request.r(i641[28], i641[29], 0, i640, 'm_fontColorGradientPreset')
  request.r(i641[30], i641[31], 0, i640, 'm_spriteAsset')
  i640.m_tintAllSprites = !!i641[32]
  request.r(i641[33], i641[34], 0, i640, 'm_StyleSheet')
  i640.m_TextStyleHashCode = i641[35]
  i640.m_overrideHtmlColors = !!i641[36]
  i640.m_faceColor = UnityEngine.Color32.ConstructColor(i641[37], i641[38], i641[39], i641[40])
  i640.m_fontSize = i641[41]
  i640.m_fontSizeBase = i641[42]
  i640.m_fontWeight = i641[43]
  i640.m_enableAutoSizing = !!i641[44]
  i640.m_fontSizeMin = i641[45]
  i640.m_fontSizeMax = i641[46]
  i640.m_fontStyle = i641[47]
  i640.m_HorizontalAlignment = i641[48]
  i640.m_VerticalAlignment = i641[49]
  i640.m_textAlignment = i641[50]
  i640.m_characterSpacing = i641[51]
  i640.m_characterHorizontalScale = i641[52]
  i640.m_wordSpacing = i641[53]
  i640.m_lineSpacing = i641[54]
  i640.m_lineSpacingMax = i641[55]
  i640.m_paragraphSpacing = i641[56]
  i640.m_charWidthMaxAdj = i641[57]
  i640.m_TextWrappingMode = i641[58]
  i640.m_wordWrappingRatios = i641[59]
  i640.m_overflowMode = i641[60]
  request.r(i641[61], i641[62], 0, i640, 'm_linkedTextComponent')
  request.r(i641[63], i641[64], 0, i640, 'parentLinkedComponent')
  i640.m_enableKerning = !!i641[65]
  var i647 = i641[66]
  var i646 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i647.length; i += 1) {
    i646.add(i647[i + 0]);
  }
  i640.m_ActiveFontFeatures = i646
  i640.m_enableExtraPadding = !!i641[67]
  i640.checkPaddingRequired = !!i641[68]
  i640.m_isRichText = !!i641[69]
  i640.m_parseCtrlCharacters = !!i641[70]
  i640.m_isOrthographic = !!i641[71]
  i640.m_isCullingEnabled = !!i641[72]
  i640.m_horizontalMapping = i641[73]
  i640.m_verticalMapping = i641[74]
  i640.m_uvLineOffset = i641[75]
  i640.m_geometrySortingOrder = i641[76]
  i640.m_IsTextObjectScaleStatic = !!i641[77]
  i640.m_VertexBufferAutoSizeReduction = !!i641[78]
  i640.m_useMaxVisibleDescender = !!i641[79]
  i640.m_pageToDisplay = i641[80]
  i640.m_margin = new pc.Vec4( i641[81], i641[82], i641[83], i641[84] )
  i640.m_isUsingLegacyAnimationComponent = !!i641[85]
  i640.m_isVolumetricText = !!i641[86]
  request.r(i641[87], i641[88], 0, i640, 'm_Material')
  i640.m_EmojiFallbackSupport = !!i641[89]
  i640.m_Maskable = !!i641[90]
  i640.m_Color = new pc.Color(i641[91], i641[92], i641[93], i641[94])
  i640.m_RaycastTarget = !!i641[95]
  i640.m_RaycastPadding = new pc.Vec4( i641[96], i641[97], i641[98], i641[99] )
  return i640
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i648 = root || request.c( 'TMPro.VertexGradient' )
  var i649 = data
  i648.topLeft = new pc.Color(i649[0], i649[1], i649[2], i649[3])
  i648.topRight = new pc.Color(i649[4], i649[5], i649[6], i649[7])
  i648.bottomLeft = new pc.Color(i649[8], i649[9], i649[10], i649[11])
  i648.bottomRight = new pc.Color(i649[12], i649[13], i649[14], i649[15])
  return i648
}

Deserializers["DiggyPlayable.EndScreen.EndScreenView"] = function (request, data, root) {
  var i652 = root || request.c( 'DiggyPlayable.EndScreen.EndScreenView' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, '_cg')
  return i652
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i655 = data
  i654.m_AspectMode = i655[0]
  i654.m_AspectRatio = i655[1]
  return i654
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.Button' )
  var i657 = data
  i656.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i657[0], i656.m_OnClick)
  i656.m_Navigation = request.d('UnityEngine.UI.Navigation', i657[1], i656.m_Navigation)
  i656.m_Transition = i657[2]
  i656.m_Colors = request.d('UnityEngine.UI.ColorBlock', i657[3], i656.m_Colors)
  i656.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i657[4], i656.m_SpriteState)
  i656.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i657[5], i656.m_AnimationTriggers)
  i656.m_Interactable = !!i657[6]
  request.r(i657[7], i657[8], 0, i656, 'm_TargetGraphic')
  return i656
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i659 = data
  i658.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i659[0], i658.m_PersistentCalls)
  return i658
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i661 = data
  var i663 = i661[0]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i663.length; i += 1) {
    i662.add(request.d('UnityEngine.Events.PersistentCall', i663[i + 0]));
  }
  i660.m_Calls = i662
  return i660
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'm_Target')
  i666.m_TargetAssemblyTypeName = i667[2]
  i666.m_MethodName = i667[3]
  i666.m_Mode = i667[4]
  i666.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i667[5], i666.m_Arguments)
  i666.m_CallState = i667[6]
  return i666
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'm_ObjectArgument')
  i668.m_ObjectArgumentAssemblyTypeName = i669[2]
  i668.m_IntArgument = i669[3]
  i668.m_FloatArgument = i669[4]
  i668.m_StringArgument = i669[5]
  i668.m_BoolArgument = !!i669[6]
  return i668
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i671 = data
  i670.m_Mode = i671[0]
  i670.m_WrapAround = !!i671[1]
  request.r(i671[2], i671[3], 0, i670, 'm_SelectOnUp')
  request.r(i671[4], i671[5], 0, i670, 'm_SelectOnDown')
  request.r(i671[6], i671[7], 0, i670, 'm_SelectOnLeft')
  request.r(i671[8], i671[9], 0, i670, 'm_SelectOnRight')
  return i670
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i673 = data
  i672.m_NormalColor = new pc.Color(i673[0], i673[1], i673[2], i673[3])
  i672.m_HighlightedColor = new pc.Color(i673[4], i673[5], i673[6], i673[7])
  i672.m_PressedColor = new pc.Color(i673[8], i673[9], i673[10], i673[11])
  i672.m_SelectedColor = new pc.Color(i673[12], i673[13], i673[14], i673[15])
  i672.m_DisabledColor = new pc.Color(i673[16], i673[17], i673[18], i673[19])
  i672.m_ColorMultiplier = i673[20]
  i672.m_FadeDuration = i673[21]
  return i672
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'm_HighlightedSprite')
  request.r(i675[2], i675[3], 0, i674, 'm_PressedSprite')
  request.r(i675[4], i675[5], 0, i674, 'm_SelectedSprite')
  request.r(i675[6], i675[7], 0, i674, 'm_DisabledSprite')
  return i674
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i677 = data
  i676.m_NormalTrigger = i677[0]
  i676.m_HighlightedTrigger = i677[1]
  i676.m_PressedTrigger = i677[2]
  i676.m_SelectedTrigger = i677[3]
  i676.m_DisabledTrigger = i677[4]
  return i676
}

Deserializers["ButtonTween"] = function (request, data, root) {
  var i678 = root || request.c( 'ButtonTween' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'CG')
  i678._disabledColorIsNormalColor = !!i679[2]
  return i678
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i680 = root || request.c( 'PlayNowButton' )
  var i681 = data
  return i680
}

Deserializers["DiggyPlayable.DiggyController"] = function (request, data, root) {
  var i682 = root || request.c( 'DiggyPlayable.DiggyController' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, '_diggy')
  request.r(i683[2], i683[3], 0, i682, '_animationController')
  i682._positionTopLandscape = new pc.Vec2( i683[4], i683[5] )
  i682._positionTopPortrait = new pc.Vec2( i683[6], i683[7] )
  i682._positionBottomLandscape = new pc.Vec2( i683[8], i683[9] )
  i682._positionBottomPortrait = new pc.Vec2( i683[10], i683[11] )
  return i682
}

Deserializers["DiggyPlayable.DiggyAnimationController"] = function (request, data, root) {
  var i684 = root || request.c( 'DiggyPlayable.DiggyAnimationController' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'spine')
  i684._showPreview = !!i685[2]
  i684._previewAnimation = i685[3]
  return i684
}

Deserializers["DiggyPlayable.OrientationManager"] = function (request, data, root) {
  var i686 = root || request.c( 'DiggyPlayable.OrientationManager' )
  var i687 = data
  return i686
}

Deserializers["DiggyPlayable.OrientationObjectsController"] = function (request, data, root) {
  var i688 = root || request.c( 'DiggyPlayable.OrientationObjectsController' )
  var i689 = data
  var i691 = i689[0]
  var i690 = []
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 2, i690, '')
  }
  i688._landscapeObjects = i690
  var i693 = i689[1]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i688._portraitObjects = i692
  return i688
}

Deserializers["AudioController"] = function (request, data, root) {
  var i696 = root || request.c( 'AudioController' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, '_musicSource')
  request.r(i697[2], i697[3], 0, i696, '_soundSource')
  request.r(i697[4], i697[5], 0, i696, '_soundSource2')
  request.r(i697[6], i697[7], 0, i696, '_musicClip')
  request.r(i697[8], i697[9], 0, i696, '_pipeClickClip')
  request.r(i697[10], i697[11], 0, i696, '_pipesFinishedWinClip')
  request.r(i697[12], i697[13], 0, i696, '_waterFlowClip')
  request.r(i697[14], i697[15], 0, i696, '_rewardRevealClip')
  request.r(i697[16], i697[17], 0, i696, '_rewardCollectClip')
  request.r(i697[18], i697[19], 0, i696, '_endScreenClip')
  request.r(i697[20], i697[21], 0, i696, '_rewardTouchChestClip')
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'clip')
  request.r(i699[2], i699[3], 0, i698, 'outputAudioMixerGroup')
  i698.playOnAwake = !!i699[4]
  i698.loop = !!i699[5]
  i698.time = i699[6]
  i698.volume = i699[7]
  i698.pitch = i699[8]
  i698.enabled = !!i699[9]
  return i698
}

Deserializers["TutorialController"] = function (request, data, root) {
  var i700 = root || request.c( 'TutorialController' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, '_tutorialHand')
  return i700
}

Deserializers["DiggyPlayable.GameEntry"] = function (request, data, root) {
  var i702 = root || request.c( 'DiggyPlayable.GameEntry' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, '_diggyController')
  request.r(i703[2], i703[3], 0, i702, '_pipeGameView')
  request.r(i703[4], i703[5], 0, i702, '_endScreenView')
  request.r(i703[6], i703[7], 0, i702, '_drowningTimer')
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i705 = data
  i704.ambientIntensity = i705[0]
  i704.reflectionIntensity = i705[1]
  i704.ambientMode = i705[2]
  i704.ambientLight = new pc.Color(i705[3], i705[4], i705[5], i705[6])
  i704.ambientSkyColor = new pc.Color(i705[7], i705[8], i705[9], i705[10])
  i704.ambientGroundColor = new pc.Color(i705[11], i705[12], i705[13], i705[14])
  i704.ambientEquatorColor = new pc.Color(i705[15], i705[16], i705[17], i705[18])
  i704.fogColor = new pc.Color(i705[19], i705[20], i705[21], i705[22])
  i704.fogEndDistance = i705[23]
  i704.fogStartDistance = i705[24]
  i704.fogDensity = i705[25]
  i704.fog = !!i705[26]
  request.r(i705[27], i705[28], 0, i704, 'skybox')
  i704.fogMode = i705[29]
  var i707 = i705[30]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i707[i + 0]) );
  }
  i704.lightmaps = i706
  i704.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i705[31], i704.lightProbes)
  i704.lightmapsMode = i705[32]
  i704.mixedBakeMode = i705[33]
  i704.environmentLightingMode = i705[34]
  i704.ambientProbe = new pc.SphericalHarmonicsL2(i705[35])
  i704.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i705[36])
  i704.useReferenceAmbientProbe = !!i705[37]
  request.r(i705[38], i705[39], 0, i704, 'customReflection')
  request.r(i705[40], i705[41], 0, i704, 'defaultReflection')
  i704.defaultReflectionMode = i705[42]
  i704.defaultReflectionResolution = i705[43]
  i704.sunLightObjectId = i705[44]
  i704.pixelLightCount = i705[45]
  i704.defaultReflectionHDR = !!i705[46]
  i704.hasLightDataAsset = !!i705[47]
  i704.hasManualGenerate = !!i705[48]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'lightmapColor')
  request.r(i711[2], i711[3], 0, i710, 'lightmapDirection')
  request.r(i711[4], i711[5], 0, i710, 'shadowMask')
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i712 = root || new UnityEngine.LightProbes()
  var i713 = data
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i721 = data
  var i723 = i721[0]
  var i722 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i723.length; i += 1) {
    i722.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i723[i + 0]));
  }
  i720.ShaderCompilationErrors = i722
  i720.name = i721[1]
  i720.guid = i721[2]
  var i725 = i721[3]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( i725[i + 0] );
  }
  i720.shaderDefinedKeywords = i724
  var i727 = i721[4]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i727[i + 0]) );
  }
  i720.passes = i726
  var i729 = i721[5]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i729[i + 0]) );
  }
  i720.usePasses = i728
  var i731 = i721[6]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i731[i + 0]) );
  }
  i720.defaultParameterValues = i730
  request.r(i721[7], i721[8], 0, i720, 'unityFallbackShader')
  i720.readDepth = !!i721[9]
  i720.hasDepthOnlyPass = !!i721[10]
  i720.isCreatedByShaderGraph = !!i721[11]
  i720.disableBatching = !!i721[12]
  i720.compiled = !!i721[13]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i735 = data
  i734.shaderName = i735[0]
  i734.errorMessage = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i738 = root || new pc.UnityShaderPass()
  var i739 = data
  i738.id = i739[0]
  i738.subShaderIndex = i739[1]
  i738.name = i739[2]
  i738.passType = i739[3]
  i738.grabPassTextureName = i739[4]
  i738.usePass = !!i739[5]
  i738.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i739[6], i738.zTest)
  i738.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i739[7], i738.zWrite)
  i738.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i739[8], i738.culling)
  i738.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i739[9], i738.blending)
  i738.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i739[10], i738.alphaBlending)
  i738.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i739[11], i738.colorWriteMask)
  i738.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i739[12], i738.offsetUnits)
  i738.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i739[13], i738.offsetFactor)
  i738.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i739[14], i738.stencilRef)
  i738.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i739[15], i738.stencilReadMask)
  i738.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i739[16], i738.stencilWriteMask)
  i738.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i739[17], i738.stencilOp)
  i738.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i739[18], i738.stencilOpFront)
  i738.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i739[19], i738.stencilOpBack)
  var i741 = i739[20]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i741[i + 0]) );
  }
  i738.tags = i740
  var i743 = i739[21]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( i743[i + 0] );
  }
  i738.passDefinedKeywords = i742
  var i745 = i739[22]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i745[i + 0]) );
  }
  i738.passDefinedKeywordGroups = i744
  var i747 = i739[23]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i747[i + 0]) );
  }
  i738.variants = i746
  var i749 = i739[24]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i749[i + 0]) );
  }
  i738.excludedVariants = i748
  i738.hasDepthReader = !!i739[25]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i751 = data
  i750.val = i751[0]
  i750.name = i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i753 = data
  i752.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[0], i752.src)
  i752.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[1], i752.dst)
  i752.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[2], i752.op)
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i755 = data
  i754.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[0], i754.pass)
  i754.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[1], i754.fail)
  i754.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[2], i754.zFail)
  i754.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[3], i754.comp)
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i759 = data
  i758.name = i759[0]
  i758.value = i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i763 = data
  var i765 = i763[0]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( i765[i + 0] );
  }
  i762.keywords = i764
  i762.hasDiscard = !!i763[1]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i769 = data
  i768.passId = i769[0]
  i768.subShaderIndex = i769[1]
  var i771 = i769[2]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( i771[i + 0] );
  }
  i768.keywords = i770
  i768.vertexProgram = i769[3]
  i768.fragmentProgram = i769[4]
  i768.exportedForWebGl2 = !!i769[5]
  i768.readDepth = !!i769[6]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'shader')
  i774.pass = i775[2]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i779 = data
  i778.name = i779[0]
  i778.type = i779[1]
  i778.value = new pc.Vec4( i779[2], i779[3], i779[4], i779[5] )
  i778.textureValue = i779[6]
  i778.shaderPropertyFlag = i779[7]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i781 = data
  i780.name = i781[0]
  request.r(i781[1], i781[2], 0, i780, 'texture')
  i780.aabb = i781[3]
  i780.vertices = i781[4]
  i780.triangles = i781[5]
  i780.textureRect = UnityEngine.Rect.MinMaxRect(i781[6], i781[7], i781[8], i781[9])
  i780.packedRect = UnityEngine.Rect.MinMaxRect(i781[10], i781[11], i781[12], i781[13])
  i780.border = new pc.Vec4( i781[14], i781[15], i781[16], i781[17] )
  i780.transparency = i781[18]
  i780.bounds = i781[19]
  i780.pixelsPerUnit = i781[20]
  i780.textureWidth = i781[21]
  i780.textureHeight = i781[22]
  i780.nativeSize = new pc.Vec2( i781[23], i781[24] )
  i780.pivot = new pc.Vec2( i781[25], i781[26] )
  i780.textureRectOffset = new pc.Vec2( i781[27], i781[28] )
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i783 = data
  i782.name = i783[0]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i785 = data
  i784.name = i785[0]
  i784.bytes64 = i785[1]
  i784.data = i785[2]
  return i784
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i786 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i787 = data
  var i789 = i787[0]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i786.atlasAssets = i788
  i786.scale = i787[1]
  request.r(i787[2], i787[3], 0, i786, 'skeletonJSON')
  var i791 = i787[4]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( i791[i + 0] );
  }
  i786.fromAnimation = i790
  var i793 = i787[5]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( i793[i + 0] );
  }
  i786.toAnimation = i792
  i786.duration = i787[6]
  i786.defaultMix = i787[7]
  request.r(i787[8], i787[9], 0, i786, 'controller')
  return i786
}

Deserializers["Spine.Unity.AtlasAsset"] = function (request, data, root) {
  var i796 = root || request.c( 'Spine.Unity.AtlasAsset' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'atlasFile')
  var i799 = i797[2]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i796.materials = i798
  return i796
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i800 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i801 = data
  i800.normalStyle = i801[0]
  i800.normalSpacingOffset = i801[1]
  i800.boldStyle = i801[2]
  i800.boldSpacing = i801[3]
  i800.italicStyle = i801[4]
  i800.tabSize = i801[5]
  request.r(i801[6], i801[7], 0, i800, 'atlas')
  i800.m_SourceFontFileGUID = i801[8]
  i800.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i801[9], i800.m_CreationSettings)
  request.r(i801[10], i801[11], 0, i800, 'm_SourceFontFile')
  i800.m_SourceFontFilePath = i801[12]
  i800.m_AtlasPopulationMode = i801[13]
  i800.InternalDynamicOS = !!i801[14]
  var i803 = i801[15]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i803.length; i += 1) {
    i802.add(request.d('UnityEngine.TextCore.Glyph', i803[i + 0]));
  }
  i800.m_GlyphTable = i802
  var i805 = i801[16]
  var i804 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i805.length; i += 1) {
    i804.add(request.d('TMPro.TMP_Character', i805[i + 0]));
  }
  i800.m_CharacterTable = i804
  var i807 = i801[17]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i800.m_AtlasTextures = i806
  i800.m_AtlasTextureIndex = i801[18]
  i800.m_IsMultiAtlasTexturesEnabled = !!i801[19]
  i800.m_GetFontFeatures = !!i801[20]
  i800.m_ClearDynamicDataOnBuild = !!i801[21]
  i800.m_AtlasWidth = i801[22]
  i800.m_AtlasHeight = i801[23]
  i800.m_AtlasPadding = i801[24]
  i800.m_AtlasRenderMode = i801[25]
  var i809 = i801[26]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i809.length; i += 1) {
    i808.add(request.d('UnityEngine.TextCore.GlyphRect', i809[i + 0]));
  }
  i800.m_UsedGlyphRects = i808
  var i811 = i801[27]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i811.length; i += 1) {
    i810.add(request.d('UnityEngine.TextCore.GlyphRect', i811[i + 0]));
  }
  i800.m_FreeGlyphRects = i810
  i800.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i801[28], i800.m_FontFeatureTable)
  i800.m_ShouldReimportFontFeatures = !!i801[29]
  var i813 = i801[30]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 1, i812, '')
  }
  i800.m_FallbackFontAssetTable = i812
  var i815 = i801[31]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('TMPro.TMP_FontWeightPair', i815[i + 0]) );
  }
  i800.m_FontWeightTable = i814
  var i817 = i801[32]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('TMPro.TMP_FontWeightPair', i817[i + 0]) );
  }
  i800.fontWeights = i816
  i800.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i801[33], i800.m_fontInfo)
  var i819 = i801[34]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i819.length; i += 1) {
    i818.add(request.d('TMPro.TMP_Glyph', i819[i + 0]));
  }
  i800.m_glyphInfoList = i818
  i800.m_KerningTable = request.d('TMPro.KerningTable', i801[35], i800.m_KerningTable)
  var i821 = i801[36]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 1, i820, '')
  }
  i800.fallbackFontAssets = i820
  i800.m_Version = i801[37]
  i800.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i801[38], i800.m_FaceInfo)
  request.r(i801[39], i801[40], 0, i800, 'm_Material')
  return i800
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i822 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i823 = data
  i822.sourceFontFileName = i823[0]
  i822.sourceFontFileGUID = i823[1]
  i822.faceIndex = i823[2]
  i822.pointSizeSamplingMode = i823[3]
  i822.pointSize = i823[4]
  i822.padding = i823[5]
  i822.paddingMode = i823[6]
  i822.packingMode = i823[7]
  i822.atlasWidth = i823[8]
  i822.atlasHeight = i823[9]
  i822.characterSetSelectionMode = i823[10]
  i822.characterSequence = i823[11]
  i822.referencedFontAssetGUID = i823[12]
  i822.referencedTextAssetGUID = i823[13]
  i822.fontStyle = i823[14]
  i822.fontStyleModifier = i823[15]
  i822.renderMode = i823[16]
  i822.includeFontFeatures = !!i823[17]
  return i822
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i827 = data
  i826.m_Index = i827[0]
  i826.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i827[1], i826.m_Metrics)
  i826.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i827[2], i826.m_GlyphRect)
  i826.m_Scale = i827[3]
  i826.m_AtlasIndex = i827[4]
  i826.m_ClassDefinitionType = i827[5]
  return i826
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i829 = data
  i828.m_Width = i829[0]
  i828.m_Height = i829[1]
  i828.m_HorizontalBearingX = i829[2]
  i828.m_HorizontalBearingY = i829[3]
  i828.m_HorizontalAdvance = i829[4]
  return i828
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i831 = data
  i830.m_X = i831[0]
  i830.m_Y = i831[1]
  i830.m_Width = i831[2]
  i830.m_Height = i831[3]
  return i830
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i834 = root || request.c( 'TMPro.TMP_Character' )
  var i835 = data
  i834.m_ElementType = i835[0]
  i834.m_Unicode = i835[1]
  i834.m_GlyphIndex = i835[2]
  i834.m_Scale = i835[3]
  return i834
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i840 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i841 = data
  var i843 = i841[0]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i843.length; i += 1) {
    i842.add(request.d('TMPro.MultipleSubstitutionRecord', i843[i + 0]));
  }
  i840.m_MultipleSubstitutionRecords = i842
  var i845 = i841[1]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i845.length; i += 1) {
    i844.add(request.d('TMPro.LigatureSubstitutionRecord', i845[i + 0]));
  }
  i840.m_LigatureSubstitutionRecords = i844
  var i847 = i841[2]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i847.length; i += 1) {
    i846.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i847[i + 0]));
  }
  i840.m_GlyphPairAdjustmentRecords = i846
  var i849 = i841[3]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i849.length; i += 1) {
    i848.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i849[i + 0]));
  }
  i840.m_MarkToBaseAdjustmentRecords = i848
  var i851 = i841[4]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i851.length; i += 1) {
    i850.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i851[i + 0]));
  }
  i840.m_MarkToMarkAdjustmentRecords = i850
  return i840
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i855 = data
  i854.m_TargetGlyphID = i855[0]
  i854.m_SubstituteGlyphIDs = i855[1]
  return i854
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i859 = data
  i858.m_ComponentGlyphIDs = i859[0]
  i858.m_LigatureGlyphID = i859[1]
  return i858
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i863 = data
  i862.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i863[0], i862.m_FirstAdjustmentRecord)
  i862.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i863[1], i862.m_SecondAdjustmentRecord)
  i862.m_FeatureLookupFlags = i863[2]
  return i862
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i867 = data
  i866.m_BaseGlyphID = i867[0]
  i866.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i867[1], i866.m_BaseGlyphAnchorPoint)
  i866.m_MarkGlyphID = i867[2]
  i866.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i867[3], i866.m_MarkPositionAdjustment)
  return i866
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i871 = data
  i870.m_BaseMarkGlyphID = i871[0]
  i870.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i871[1], i870.m_BaseMarkGlyphAnchorPoint)
  i870.m_CombiningMarkGlyphID = i871[2]
  i870.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i871[3], i870.m_CombiningMarkPositionAdjustment)
  return i870
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i876 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'regularTypeface')
  request.r(i877[2], i877[3], 0, i876, 'italicTypeface')
  return i876
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i879 = data
  i878.Name = i879[0]
  i878.PointSize = i879[1]
  i878.Scale = i879[2]
  i878.CharacterCount = i879[3]
  i878.LineHeight = i879[4]
  i878.Baseline = i879[5]
  i878.Ascender = i879[6]
  i878.CapHeight = i879[7]
  i878.Descender = i879[8]
  i878.CenterLine = i879[9]
  i878.SuperscriptOffset = i879[10]
  i878.SubscriptOffset = i879[11]
  i878.SubSize = i879[12]
  i878.Underline = i879[13]
  i878.UnderlineThickness = i879[14]
  i878.strikethrough = i879[15]
  i878.strikethroughThickness = i879[16]
  i878.TabWidth = i879[17]
  i878.Padding = i879[18]
  i878.AtlasWidth = i879[19]
  i878.AtlasHeight = i879[20]
  return i878
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.TMP_Glyph' )
  var i883 = data
  i882.id = i883[0]
  i882.x = i883[1]
  i882.y = i883[2]
  i882.width = i883[3]
  i882.height = i883[4]
  i882.xOffset = i883[5]
  i882.yOffset = i883[6]
  i882.xAdvance = i883[7]
  i882.scale = i883[8]
  return i882
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.KerningTable' )
  var i885 = data
  var i887 = i885[0]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(request.d('TMPro.KerningPair', i887[i + 0]));
  }
  i884.kerningPairs = i886
  return i884
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.KerningPair' )
  var i891 = data
  i890.xOffset = i891[0]
  i890.m_FirstGlyph = i891[1]
  i890.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i891[2], i890.m_FirstGlyphAdjustments)
  i890.m_SecondGlyph = i891[3]
  i890.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i891[4], i890.m_SecondGlyphAdjustments)
  i890.m_IgnoreSpacingAdjustments = !!i891[5]
  return i890
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i893 = data
  i892.m_FaceIndex = i893[0]
  i892.m_FamilyName = i893[1]
  i892.m_StyleName = i893[2]
  i892.m_PointSize = i893[3]
  i892.m_Scale = i893[4]
  i892.m_UnitsPerEM = i893[5]
  i892.m_LineHeight = i893[6]
  i892.m_AscentLine = i893[7]
  i892.m_CapLine = i893[8]
  i892.m_MeanLine = i893[9]
  i892.m_Baseline = i893[10]
  i892.m_DescentLine = i893[11]
  i892.m_SuperscriptOffset = i893[12]
  i892.m_SuperscriptSize = i893[13]
  i892.m_SubscriptOffset = i893[14]
  i892.m_SubscriptSize = i893[15]
  i892.m_UnderlineOffset = i893[16]
  i892.m_UnderlineThickness = i893[17]
  i892.m_StrikethroughOffset = i893[18]
  i892.m_StrikethroughThickness = i893[19]
  i892.m_TabWidth = i893[20]
  return i892
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i894 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i895 = data
  i894.useSafeMode = !!i895[0]
  i894.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i895[1], i894.safeModeOptions)
  i894.timeScale = i895[2]
  i894.unscaledTimeScale = i895[3]
  i894.useSmoothDeltaTime = !!i895[4]
  i894.maxSmoothUnscaledTime = i895[5]
  i894.rewindCallbackMode = i895[6]
  i894.showUnityEditorReport = !!i895[7]
  i894.logBehaviour = i895[8]
  i894.drawGizmos = !!i895[9]
  i894.defaultRecyclable = !!i895[10]
  i894.defaultAutoPlay = i895[11]
  i894.defaultUpdateType = i895[12]
  i894.defaultTimeScaleIndependent = !!i895[13]
  i894.defaultEaseType = i895[14]
  i894.defaultEaseOvershootOrAmplitude = i895[15]
  i894.defaultEasePeriod = i895[16]
  i894.defaultAutoKill = !!i895[17]
  i894.defaultLoopType = i895[18]
  i894.debugMode = !!i895[19]
  i894.debugStoreTargetId = !!i895[20]
  i894.showPreviewPanel = !!i895[21]
  i894.storeSettingsLocation = i895[22]
  i894.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i895[23], i894.modules)
  i894.createASMDEF = !!i895[24]
  i894.showPlayingTweens = !!i895[25]
  i894.showPausedTweens = !!i895[26]
  return i894
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i896 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i897 = data
  i896.logBehaviour = i897[0]
  i896.nestedTweenFailureBehaviour = i897[1]
  return i896
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i898 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i899 = data
  i898.showPanel = !!i899[0]
  i898.audioEnabled = !!i899[1]
  i898.physicsEnabled = !!i899[2]
  i898.physics2DEnabled = !!i899[3]
  i898.spriteEnabled = !!i899[4]
  i898.uiEnabled = !!i899[5]
  i898.textMeshProEnabled = !!i899[6]
  i898.tk2DEnabled = !!i899[7]
  i898.deAudioEnabled = !!i899[8]
  i898.deUnityExtendedEnabled = !!i899[9]
  i898.epoOutlineEnabled = !!i899[10]
  return i898
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i901 = data
  i900.m_GlyphIndex = i901[0]
  i900.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i901[1], i900.m_GlyphValueRecord)
  return i900
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i903 = data
  i902.m_XPlacement = i903[0]
  i902.m_YPlacement = i903[1]
  i902.m_XAdvance = i903[2]
  i902.m_YAdvance = i903[3]
  return i902
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i905 = data
  var i907 = i905[0]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(request.d('TMPro.TMP_Style', i907[i + 0]));
  }
  i904.m_StyleList = i906
  return i904
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.TMP_Style' )
  var i911 = data
  i910.m_Name = i911[0]
  i910.m_HashCode = i911[1]
  i910.m_OpeningDefinition = i911[2]
  i910.m_ClosingDefinition = i911[3]
  i910.m_OpeningTagArray = i911[4]
  i910.m_ClosingTagArray = i911[5]
  return i910
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.TMP_Settings' )
  var i913 = data
  i912.assetVersion = i913[0]
  i912.m_TextWrappingMode = i913[1]
  i912.m_enableKerning = !!i913[2]
  var i915 = i913[3]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i915.length; i += 1) {
    i914.add(i915[i + 0]);
  }
  i912.m_ActiveFontFeatures = i914
  i912.m_enableExtraPadding = !!i913[4]
  i912.m_enableTintAllSprites = !!i913[5]
  i912.m_enableParseEscapeCharacters = !!i913[6]
  i912.m_EnableRaycastTarget = !!i913[7]
  i912.m_GetFontFeaturesAtRuntime = !!i913[8]
  i912.m_missingGlyphCharacter = i913[9]
  i912.m_ClearDynamicDataOnBuild = !!i913[10]
  i912.m_warningsDisabled = !!i913[11]
  request.r(i913[12], i913[13], 0, i912, 'm_defaultFontAsset')
  i912.m_defaultFontAssetPath = i913[14]
  i912.m_defaultFontSize = i913[15]
  i912.m_defaultAutoSizeMinRatio = i913[16]
  i912.m_defaultAutoSizeMaxRatio = i913[17]
  i912.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i913[18], i913[19] )
  i912.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i913[20], i913[21] )
  i912.m_autoSizeTextContainer = !!i913[22]
  i912.m_IsTextObjectScaleStatic = !!i913[23]
  var i917 = i913[24]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 1, i916, '')
  }
  i912.m_fallbackFontAssets = i916
  i912.m_matchMaterialPreset = !!i913[25]
  i912.m_HideSubTextObjects = !!i913[26]
  request.r(i913[27], i913[28], 0, i912, 'm_defaultSpriteAsset')
  i912.m_defaultSpriteAssetPath = i913[29]
  i912.m_enableEmojiSupport = !!i913[30]
  i912.m_MissingCharacterSpriteUnicode = i913[31]
  var i919 = i913[32]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 1, i918, '')
  }
  i912.m_EmojiFallbackTextAssets = i918
  i912.m_defaultColorGradientPresetsPath = i913[33]
  request.r(i913[34], i913[35], 0, i912, 'm_defaultStyleSheet')
  i912.m_StyleSheetsResourcePath = i913[36]
  request.r(i913[37], i913[38], 0, i912, 'm_leadingCharacters')
  request.r(i913[39], i913[40], 0, i912, 'm_followingCharacters')
  i912.m_UseModernHangulLineBreakingRules = !!i913[41]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i923 = data
  var i925 = i923[0]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i925[i + 0]) );
  }
  i922.files = i924
  i922.componentToPrefabIds = i923[1]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i929 = data
  i928.path = i929[0]
  request.r(i929[1], i929[2], 0, i928, 'unityObject')
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i931 = data
  var i933 = i931[0]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i933[i + 0]) );
  }
  i930.scriptsExecutionOrder = i932
  var i935 = i931[1]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i935[i + 0]) );
  }
  i930.sortingLayers = i934
  var i937 = i931[2]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i937[i + 0]) );
  }
  i930.cullingLayers = i936
  i930.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i931[3], i930.timeSettings)
  i930.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i931[4], i930.physicsSettings)
  i930.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i931[5], i930.physics2DSettings)
  i930.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i931[6], i930.qualitySettings)
  i930.enableRealtimeShadows = !!i931[7]
  i930.enableAutoInstancing = !!i931[8]
  i930.enableStaticBatching = !!i931[9]
  i930.enableDynamicBatching = !!i931[10]
  i930.lightmapEncodingQuality = i931[11]
  i930.desiredColorSpace = i931[12]
  var i939 = i931[13]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( i939[i + 0] );
  }
  i930.allTags = i938
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i943 = data
  i942.name = i943[0]
  i942.value = i943[1]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i947 = data
  i946.id = i947[0]
  i946.name = i947[1]
  i946.value = i947[2]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i951 = data
  i950.id = i951[0]
  i950.name = i951[1]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i953 = data
  i952.fixedDeltaTime = i953[0]
  i952.maximumDeltaTime = i953[1]
  i952.timeScale = i953[2]
  i952.maximumParticleTimestep = i953[3]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i955 = data
  i954.gravity = new pc.Vec3( i955[0], i955[1], i955[2] )
  i954.defaultSolverIterations = i955[3]
  i954.bounceThreshold = i955[4]
  i954.autoSyncTransforms = !!i955[5]
  i954.autoSimulation = !!i955[6]
  var i957 = i955[7]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i957[i + 0]) );
  }
  i954.collisionMatrix = i956
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i961 = data
  i960.enabled = !!i961[0]
  i960.layerId = i961[1]
  i960.otherLayerId = i961[2]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'material')
  i962.gravity = new pc.Vec2( i963[2], i963[3] )
  i962.positionIterations = i963[4]
  i962.velocityIterations = i963[5]
  i962.velocityThreshold = i963[6]
  i962.maxLinearCorrection = i963[7]
  i962.maxAngularCorrection = i963[8]
  i962.maxTranslationSpeed = i963[9]
  i962.maxRotationSpeed = i963[10]
  i962.baumgarteScale = i963[11]
  i962.baumgarteTOIScale = i963[12]
  i962.timeToSleep = i963[13]
  i962.linearSleepTolerance = i963[14]
  i962.angularSleepTolerance = i963[15]
  i962.defaultContactOffset = i963[16]
  i962.autoSimulation = !!i963[17]
  i962.queriesHitTriggers = !!i963[18]
  i962.queriesStartInColliders = !!i963[19]
  i962.callbacksOnDisable = !!i963[20]
  i962.reuseCollisionCallbacks = !!i963[21]
  i962.autoSyncTransforms = !!i963[22]
  var i965 = i963[23]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i965[i + 0]) );
  }
  i962.collisionMatrix = i964
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i969 = data
  i968.enabled = !!i969[0]
  i968.layerId = i969[1]
  i968.otherLayerId = i969[2]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i971 = data
  var i973 = i971[0]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i973[i + 0]) );
  }
  i970.qualityLevels = i972
  var i975 = i971[1]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( i975[i + 0] );
  }
  i970.names = i974
  i970.shadows = i971[2]
  i970.anisotropicFiltering = i971[3]
  i970.antiAliasing = i971[4]
  i970.lodBias = i971[5]
  i970.shadowCascades = i971[6]
  i970.shadowDistance = i971[7]
  i970.shadowmaskMode = i971[8]
  i970.shadowProjection = i971[9]
  i970.shadowResolution = i971[10]
  i970.softParticles = !!i971[11]
  i970.softVegetation = !!i971[12]
  i970.activeColorSpace = i971[13]
  i970.desiredColorSpace = i971[14]
  i970.masterTextureLimit = i971[15]
  i970.maxQueuedFrames = i971[16]
  i970.particleRaycastBudget = i971[17]
  i970.pixelLightCount = i971[18]
  i970.realtimeReflectionProbes = !!i971[19]
  i970.shadowCascade2Split = i971[20]
  i970.shadowCascade4Split = new pc.Vec3( i971[21], i971[22], i971[23] )
  i970.streamingMipmapsActive = !!i971[24]
  i970.vSyncCount = i971[25]
  i970.asyncUploadBufferSize = i971[26]
  i970.asyncUploadTimeSlice = i971[27]
  i970.billboardsFaceCameraPosition = !!i971[28]
  i970.shadowNearPlaneOffset = i971[29]
  i970.streamingMipmapsMemoryBudget = i971[30]
  i970.maximumLODLevel = i971[31]
  i970.streamingMipmapsAddAllCameras = !!i971[32]
  i970.streamingMipmapsMaxLevelReduction = i971[33]
  i970.streamingMipmapsRenderersPerFrame = i971[34]
  i970.resolutionScalingFixedDPIFactor = i971[35]
  i970.streamingMipmapsMaxFileIORequests = i971[36]
  i970.currentQualityLevel = i971[37]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i981 = data
  i980.weight = i981[0]
  i980.vertices = i981[1]
  i980.normals = i981[2]
  i980.tangents = i981[3]
  return i980
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i983 = data
  i982.m_XCoordinate = i983[0]
  i982.m_YCoordinate = i983[1]
  return i982
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i985 = data
  i984.m_XPositionAdjustment = i985[0]
  i984.m_YPositionAdjustment = i985[1]
  return i984
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i987 = data
  i986.xPlacement = i987[0]
  i986.yPlacement = i987[1]
  i986.xAdvance = i987[2]
  i986.yAdvance = i987[3]
  return i986
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[2],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[73],"81":[73],"82":[73],"83":[73],"84":[73],"85":[73],"86":[2],"87":[12],"88":[89],"90":[89],"32":[25],"42":[24,40],"14":[10,12],"91":[92,10,12],"93":[10,12],"94":[35,25],"95":[96],"97":[98],"99":[93],"100":[93],"101":[93],"102":[12,10],"103":[98],"104":[98],"105":[27],"106":[2],"107":[108],"109":[25],"110":[35,25],"111":[12],"112":[35,25],"113":[25],"114":[25],"115":[12,25],"37":[25,35],"116":[25],"117":[25],"34":[32],"36":[35,25],"39":[25],"33":[32],"118":[25],"119":[25],"120":[25],"121":[25],"122":[25],"123":[25],"124":[25],"125":[25],"126":[25],"127":[35,25],"128":[25],"129":[25],"130":[25],"131":[25],"132":[35,25],"133":[25],"134":[8],"135":[8],"9":[8],"136":[8],"5":[2],"137":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.MonoBehaviour","CameraController","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","DiggyPlayable.WaterPipeGame.WaterPipeGameView","UnityEngine.GameObject","DiggyPlayable.EndScreen.EndScreenView","TutorialController","DiggyPlayable.DiggyController","DiggyPlayable.WaterPipeGame.WaterPipe","UnityEngine.Transform","DrowningTimer","UnityEngine.CanvasGroup","UnityEngine.RectTransform","TreasureChest","UnityEngine.SpriteRenderer","UnityEngine.Sprite","DiggyPlayable.WaterPipeGame.PipeClickSensor","UnityEngine.SpriteMask","UnityEngine.BoxCollider2D","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Button","PlayNowButton","ButtonTween","DiggyPlayable.DiggyAnimationController","DiggyPlayable.OrientationManager","DiggyPlayable.OrientationObjectsController","AudioController","UnityEngine.AudioSource","UnityEngine.AudioClip","DiggyPlayable.GameEntry","Spine.Unity.AtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_StyleSheet","TMPro.TMP_Settings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.SkeletonAnimator","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Modules.SkeletonGhost","Spine.Unity.Modules.SkeletonRagdoll","Spine.Unity.Modules.SkeletonRagdoll2D","Spine.Unity.Modules.SkeletonPartsRenderer","Spine.Unity.Modules.SkeletonUtilityEyeConstraint","Spine.Unity.Modules.SkeletonUtilityGroundConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.71f1";

Deserializers.productName = "DiggyPlayable";

Deserializers.lunaInitializationTime = "03/29/2026 10:43:38";

Deserializers.lunaDaysRunning = "1.5";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "DiggyConcept";

Deserializers.lunaAppID = "38284";

Deserializers.projectId = "55669954d8ea041b6a751d29a31c8185";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1806";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5091";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "SlavomirBanas";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.SlavomirBanas.DiggyPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "822e07e2-1f3c-4798-b046-83f7c1c9efc4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

