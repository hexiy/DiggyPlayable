var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointSpring' )
  var i459 = data
  i458.spring = i459[0]
  i458.damper = i459[1]
  i458.targetPosition = i459[2]
  return i458
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointMotor' )
  var i461 = data
  i460.m_TargetVelocity = i461[0]
  i460.m_Force = i461[1]
  i460.m_FreeSpin = i461[2]
  return i460
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.JointLimits' )
  var i463 = data
  i462.m_Min = i463[0]
  i462.m_Max = i463[1]
  i462.m_Bounciness = i463[2]
  i462.m_BounceMinVelocity = i463[3]
  i462.m_ContactDistance = i463[4]
  i462.minBounce = i463[5]
  i462.maxBounce = i463[6]
  return i462
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointDrive' )
  var i465 = data
  i464.m_PositionSpring = i465[0]
  i464.m_PositionDamper = i465[1]
  i464.m_MaximumForce = i465[2]
  i464.m_UseAcceleration = i465[3]
  return i464
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i467 = data
  i466.m_Spring = i467[0]
  i466.m_Damper = i467[1]
  return i466
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i469 = data
  i468.m_Limit = i469[0]
  i468.m_Bounciness = i469[1]
  i468.m_ContactDistance = i469[2]
  return i468
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i471 = data
  i470.m_ExtremumSlip = i471[0]
  i470.m_ExtremumValue = i471[1]
  i470.m_AsymptoteSlip = i471[2]
  i470.m_AsymptoteValue = i471[3]
  i470.m_Stiffness = i471[4]
  return i470
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i473 = data
  i472.m_LowerAngle = i473[0]
  i472.m_UpperAngle = i473[1]
  return i472
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i475 = data
  i474.m_MotorSpeed = i475[0]
  i474.m_MaximumMotorTorque = i475[1]
  return i474
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i477 = data
  i476.m_DampingRatio = i477[0]
  i476.m_Frequency = i477[1]
  i476.m_Angle = i477[2]
  return i476
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i479 = data
  i478.m_LowerTranslation = i479[0]
  i478.m_UpperTranslation = i479[1]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i481 = data
  i480.name = i481[0]
  i480.width = i481[1]
  i480.height = i481[2]
  i480.mipmapCount = i481[3]
  i480.anisoLevel = i481[4]
  i480.filterMode = i481[5]
  i480.hdr = !!i481[6]
  i480.format = i481[7]
  i480.wrapMode = i481[8]
  i480.alphaIsTransparency = !!i481[9]
  i480.alphaSource = i481[10]
  i480.graphicsFormat = i481[11]
  i480.sRGBTexture = !!i481[12]
  i480.desiredColorSpace = i481[13]
  i480.wrapU = i481[14]
  i480.wrapV = i481[15]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i482 = root || new pc.UnityMaterial()
  var i483 = data
  i482.name = i483[0]
  request.r(i483[1], i483[2], 0, i482, 'shader')
  i482.renderQueue = i483[3]
  i482.enableInstancing = !!i483[4]
  var i485 = i483[5]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i485[i + 0]) );
  }
  i482.floatParameters = i484
  var i487 = i483[6]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i487[i + 0]) );
  }
  i482.colorParameters = i486
  var i489 = i483[7]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i489[i + 0]) );
  }
  i482.vectorParameters = i488
  var i491 = i483[8]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i491[i + 0]) );
  }
  i482.textureParameters = i490
  var i493 = i483[9]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i493[i + 0]) );
  }
  i482.materialFlags = i492
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i497 = data
  i496.name = i497[0]
  i496.value = i497[1]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i501 = data
  i500.name = i501[0]
  i500.value = new pc.Color(i501[1], i501[2], i501[3], i501[4])
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i505 = data
  i504.name = i505[0]
  i504.value = new pc.Vec4( i505[1], i505[2], i505[3], i505[4] )
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i509 = data
  i508.name = i509[0]
  request.r(i509[1], i509[2], 0, i508, 'value')
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i513 = data
  i512.name = i513[0]
  i512.enabled = !!i513[1]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i515 = data
  i514.name = i515[0]
  i514.halfPrecision = !!i515[1]
  i514.useSimplification = !!i515[2]
  i514.useUInt32IndexFormat = !!i515[3]
  i514.vertexCount = i515[4]
  i514.aabb = i515[5]
  var i517 = i515[6]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( !!i517[i + 0] );
  }
  i514.streams = i516
  i514.vertices = i515[7]
  var i519 = i515[8]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i519[i + 0]) );
  }
  i514.subMeshes = i518
  var i521 = i515[9]
  var i520 = []
  for(var i = 0; i < i521.length; i += 16) {
    i520.push( new pc.Mat4().setData(i521[i + 0], i521[i + 1], i521[i + 2], i521[i + 3],  i521[i + 4], i521[i + 5], i521[i + 6], i521[i + 7],  i521[i + 8], i521[i + 9], i521[i + 10], i521[i + 11],  i521[i + 12], i521[i + 13], i521[i + 14], i521[i + 15]) );
  }
  i514.bindposes = i520
  var i523 = i515[10]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i523[i + 0]) );
  }
  i514.blendShapes = i522
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i529 = data
  i528.triangles = i529[0]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i535 = data
  i534.name = i535[0]
  var i537 = i535[1]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i537[i + 0]) );
  }
  i534.frames = i536
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i539 = data
  i538.name = i539[0]
  i538.index = i539[1]
  i538.startup = !!i539[2]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i541 = data
  i540.aspect = i541[0]
  i540.orthographic = !!i541[1]
  i540.orthographicSize = i541[2]
  i540.backgroundColor = new pc.Color(i541[3], i541[4], i541[5], i541[6])
  i540.nearClipPlane = i541[7]
  i540.farClipPlane = i541[8]
  i540.fieldOfView = i541[9]
  i540.depth = i541[10]
  i540.clearFlags = i541[11]
  i540.cullingMask = i541[12]
  i540.rect = i541[13]
  request.r(i541[14], i541[15], 0, i540, 'targetTexture')
  i540.usePhysicalProperties = !!i541[16]
  i540.focalLength = i541[17]
  i540.sensorSize = new pc.Vec2( i541[18], i541[19] )
  i540.lensShift = new pc.Vec2( i541[20], i541[21] )
  i540.gateFit = i541[22]
  i540.commandBufferCount = i541[23]
  i540.cameraType = i541[24]
  i540.enabled = !!i541[25]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i543 = data
  i542.name = i543[0]
  i542.tagId = i543[1]
  i542.enabled = !!i543[2]
  i542.isStatic = !!i543[3]
  i542.layer = i543[4]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i545 = data
  i544.pivot = new pc.Vec2( i545[0], i545[1] )
  i544.anchorMin = new pc.Vec2( i545[2], i545[3] )
  i544.anchorMax = new pc.Vec2( i545[4], i545[5] )
  i544.sizeDelta = new pc.Vec2( i545[6], i545[7] )
  i544.anchoredPosition3D = new pc.Vec3( i545[8], i545[9], i545[10] )
  i544.rotation = new pc.Quat(i545[11], i545[12], i545[13], i545[14])
  i544.scale = new pc.Vec3( i545[15], i545[16], i545[17] )
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i547 = data
  i546.planeDistance = i547[0]
  i546.referencePixelsPerUnit = i547[1]
  i546.isFallbackOverlay = !!i547[2]
  i546.renderMode = i547[3]
  i546.renderOrder = i547[4]
  i546.sortingLayerName = i547[5]
  i546.sortingOrder = i547[6]
  i546.scaleFactor = i547[7]
  request.r(i547[8], i547[9], 0, i546, 'worldCamera')
  i546.overrideSorting = !!i547[10]
  i546.pixelPerfect = !!i547[11]
  i546.targetDisplay = i547[12]
  i546.overridePixelPerfect = !!i547[13]
  i546.enabled = !!i547[14]
  return i546
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i549 = data
  i548.m_UiScaleMode = i549[0]
  i548.m_ReferencePixelsPerUnit = i549[1]
  i548.m_ScaleFactor = i549[2]
  i548.m_ReferenceResolution = new pc.Vec2( i549[3], i549[4] )
  i548.m_ScreenMatchMode = i549[5]
  i548.m_MatchWidthOrHeight = i549[6]
  i548.m_PhysicalUnit = i549[7]
  i548.m_FallbackScreenDPI = i549[8]
  i548.m_DefaultSpriteDPI = i549[9]
  i548.m_DynamicPixelsPerUnit = i549[10]
  i548.m_PresetInfoIsWorld = !!i549[11]
  return i548
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i551 = data
  i550.m_IgnoreReversedGraphics = !!i551[0]
  i550.m_BlockingObjects = i551[1]
  i550.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i551[2] )
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i553 = data
  i552.cullTransparentMesh = !!i553[0]
  return i552
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.Image' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'm_Sprite')
  i554.m_Type = i555[2]
  i554.m_PreserveAspect = !!i555[3]
  i554.m_FillCenter = !!i555[4]
  i554.m_FillMethod = i555[5]
  i554.m_FillAmount = i555[6]
  i554.m_FillClockwise = !!i555[7]
  i554.m_FillOrigin = i555[8]
  i554.m_UseSpriteMesh = !!i555[9]
  i554.m_PixelsPerUnitMultiplier = i555[10]
  request.r(i555[11], i555[12], 0, i554, 'm_Material')
  i554.m_Maskable = !!i555[13]
  i554.m_Color = new pc.Color(i555[14], i555[15], i555[16], i555[17])
  i554.m_RaycastTarget = !!i555[18]
  i554.m_RaycastPadding = new pc.Vec4( i555[19], i555[20], i555[21], i555[22] )
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i557 = data
  i556.color = new pc.Color(i557[0], i557[1], i557[2], i557[3])
  request.r(i557[4], i557[5], 0, i556, 'sprite')
  i556.flipX = !!i557[6]
  i556.flipY = !!i557[7]
  i556.drawMode = i557[8]
  i556.size = new pc.Vec2( i557[9], i557[10] )
  i556.tileMode = i557[11]
  i556.adaptiveModeThreshold = i557[12]
  i556.maskInteraction = i557[13]
  i556.spriteSortPoint = i557[14]
  i556.enabled = !!i557[15]
  request.r(i557[16], i557[17], 0, i556, 'sharedMaterial')
  var i559 = i557[18]
  var i558 = []
  for(var i = 0; i < i559.length; i += 2) {
  request.r(i559[i + 0], i559[i + 1], 2, i558, '')
  }
  i556.sharedMaterials = i558
  i556.receiveShadows = !!i557[19]
  i556.shadowCastingMode = i557[20]
  i556.sortingLayerID = i557[21]
  i556.sortingOrder = i557[22]
  i556.lightmapIndex = i557[23]
  i556.lightmapSceneIndex = i557[24]
  i556.lightmapScaleOffset = new pc.Vec4( i557[25], i557[26], i557[27], i557[28] )
  i556.lightProbeUsage = i557[29]
  i556.reflectionProbeUsage = i557[30]
  return i556
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'm_FirstSelected')
  i562.m_sendNavigationEvents = !!i563[2]
  i562.m_DragThreshold = i563[3]
  return i562
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i565 = data
  i564.m_MoveRepeatDelay = i565[0]
  i564.m_MoveRepeatRate = i565[1]
  request.r(i565[2], i565[3], 0, i564, 'm_XRTrackingOrigin')
  request.r(i565[4], i565[5], 0, i564, 'm_ActionsAsset')
  request.r(i565[6], i565[7], 0, i564, 'm_PointAction')
  request.r(i565[8], i565[9], 0, i564, 'm_MoveAction')
  request.r(i565[10], i565[11], 0, i564, 'm_SubmitAction')
  request.r(i565[12], i565[13], 0, i564, 'm_CancelAction')
  request.r(i565[14], i565[15], 0, i564, 'm_LeftClickAction')
  request.r(i565[16], i565[17], 0, i564, 'm_MiddleClickAction')
  request.r(i565[18], i565[19], 0, i564, 'm_RightClickAction')
  request.r(i565[20], i565[21], 0, i564, 'm_ScrollWheelAction')
  request.r(i565[22], i565[23], 0, i564, 'm_TrackedDevicePositionAction')
  request.r(i565[24], i565[25], 0, i564, 'm_TrackedDeviceOrientationAction')
  i564.m_DeselectOnBackgroundClick = !!i565[26]
  i564.m_PointerBehavior = i565[27]
  i564.m_CursorLockBehavior = i565[28]
  i564.m_ScrollDeltaPerTick = i565[29]
  i564.m_SendPointerHoverToParent = !!i565[30]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'sharedMesh')
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'additionalVertexStreams')
  i568.enabled = !!i569[2]
  request.r(i569[3], i569[4], 0, i568, 'sharedMaterial')
  var i571 = i569[5]
  var i570 = []
  for(var i = 0; i < i571.length; i += 2) {
  request.r(i571[i + 0], i571[i + 1], 2, i570, '')
  }
  i568.sharedMaterials = i570
  i568.receiveShadows = !!i569[6]
  i568.shadowCastingMode = i569[7]
  i568.sortingLayerID = i569[8]
  i568.sortingOrder = i569[9]
  i568.lightmapIndex = i569[10]
  i568.lightmapSceneIndex = i569[11]
  i568.lightmapScaleOffset = new pc.Vec4( i569[12], i569[13], i569[14], i569[15] )
  i568.lightProbeUsage = i569[16]
  i568.reflectionProbeUsage = i569[17]
  return i568
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i572 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i573 = data
  i572.loop = !!i573[0]
  i572.timeScale = i573[1]
  request.r(i573[2], i573[3], 0, i572, 'skeletonDataAsset')
  i572.initialSkinName = i573[4]
  i572.initialFlipX = !!i573[5]
  i572.initialFlipY = !!i573[6]
  var i575 = i573[7]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( i575[i + 0] );
  }
  i572.separatorSlotNames = i574
  i572.zSpacing = i573[8]
  i572.useClipping = !!i573[9]
  i572.immutableTriangles = !!i573[10]
  i572.pmaVertexColors = !!i573[11]
  i572.clearStateOnDisable = !!i573[12]
  i572.tintBlack = !!i573[13]
  i572.singleSubmesh = !!i573[14]
  i572.addNormals = !!i573[15]
  i572.calculateTangents = !!i573[16]
  i572.logErrors = !!i573[17]
  i572.disableRenderingOnOverride = !!i573[18]
  i572._animationName = i573[19]
  return i572
}

Deserializers["TreasureClickSensor"] = function (request, data, root) {
  var i578 = root || request.c( 'TreasureClickSensor' )
  var i579 = data
  return i578
}

Deserializers["DiggyPlayable.WaterPipeGame.WaterPipeGameView"] = function (request, data, root) {
  var i580 = root || request.c( 'DiggyPlayable.WaterPipeGame.WaterPipeGameView' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, '_puzzlePanel')
  var i583 = i581[2]
  var i582 = []
  for(var i = 0; i < i583.length; i += 2) {
  request.r(i583[i + 0], i583[i + 1], 2, i582, '')
  }
  i580._pipes = i582
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i587 = data
  i586.frontSortingLayerID = i587[0]
  i586.frontSortingOrder = i587[1]
  i586.backSortingLayerID = i587[2]
  i586.backSortingOrder = i587[3]
  i586.alphaCutoff = i587[4]
  request.r(i587[5], i587[6], 0, i586, 'sprite')
  i586.tileMode = i587[7]
  i586.isCustomRangeActive = !!i587[8]
  i586.spriteSortPoint = i587[9]
  i586.enabled = !!i587[10]
  request.r(i587[11], i587[12], 0, i586, 'sharedMaterial')
  var i589 = i587[13]
  var i588 = []
  for(var i = 0; i < i589.length; i += 2) {
  request.r(i589[i + 0], i589[i + 1], 2, i588, '')
  }
  i586.sharedMaterials = i588
  i586.receiveShadows = !!i587[14]
  i586.shadowCastingMode = i587[15]
  i586.sortingLayerID = i587[16]
  i586.sortingOrder = i587[17]
  i586.lightmapIndex = i587[18]
  i586.lightmapSceneIndex = i587[19]
  i586.lightmapScaleOffset = new pc.Vec4( i587[20], i587[21], i587[22], i587[23] )
  i586.lightProbeUsage = i587[24]
  i586.reflectionProbeUsage = i587[25]
  return i586
}

Deserializers["DrowningTimer"] = function (request, data, root) {
  var i590 = root || request.c( 'DrowningTimer' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, '_timerFill')
  return i590
}

Deserializers["DiggyPlayable.DiggyController"] = function (request, data, root) {
  var i592 = root || request.c( 'DiggyPlayable.DiggyController' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'spine')
  return i592
}

Deserializers["DiggyPlayable.GameEntry"] = function (request, data, root) {
  var i594 = root || request.c( 'DiggyPlayable.GameEntry' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, '_diggyController')
  request.r(i595[2], i595[3], 0, i594, '_pipeGameView')
  request.r(i595[4], i595[5], 0, i594, '_treasureImageSensor')
  request.r(i595[6], i595[7], 0, i594, '_drowningTimer')
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i597 = data
  i596.ambientIntensity = i597[0]
  i596.reflectionIntensity = i597[1]
  i596.ambientMode = i597[2]
  i596.ambientLight = new pc.Color(i597[3], i597[4], i597[5], i597[6])
  i596.ambientSkyColor = new pc.Color(i597[7], i597[8], i597[9], i597[10])
  i596.ambientGroundColor = new pc.Color(i597[11], i597[12], i597[13], i597[14])
  i596.ambientEquatorColor = new pc.Color(i597[15], i597[16], i597[17], i597[18])
  i596.fogColor = new pc.Color(i597[19], i597[20], i597[21], i597[22])
  i596.fogEndDistance = i597[23]
  i596.fogStartDistance = i597[24]
  i596.fogDensity = i597[25]
  i596.fog = !!i597[26]
  request.r(i597[27], i597[28], 0, i596, 'skybox')
  i596.fogMode = i597[29]
  var i599 = i597[30]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i599[i + 0]) );
  }
  i596.lightmaps = i598
  i596.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i597[31], i596.lightProbes)
  i596.lightmapsMode = i597[32]
  i596.mixedBakeMode = i597[33]
  i596.environmentLightingMode = i597[34]
  i596.ambientProbe = new pc.SphericalHarmonicsL2(i597[35])
  i596.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i597[36])
  i596.useReferenceAmbientProbe = !!i597[37]
  request.r(i597[38], i597[39], 0, i596, 'customReflection')
  request.r(i597[40], i597[41], 0, i596, 'defaultReflection')
  i596.defaultReflectionMode = i597[42]
  i596.defaultReflectionResolution = i597[43]
  i596.sunLightObjectId = i597[44]
  i596.pixelLightCount = i597[45]
  i596.defaultReflectionHDR = !!i597[46]
  i596.hasLightDataAsset = !!i597[47]
  i596.hasManualGenerate = !!i597[48]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'lightmapColor')
  request.r(i603[2], i603[3], 0, i602, 'lightmapDirection')
  request.r(i603[4], i603[5], 0, i602, 'shadowMask')
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i604 = root || new UnityEngine.LightProbes()
  var i605 = data
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i613 = data
  var i615 = i613[0]
  var i614 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i615.length; i += 1) {
    i614.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i615[i + 0]));
  }
  i612.ShaderCompilationErrors = i614
  i612.name = i613[1]
  i612.guid = i613[2]
  var i617 = i613[3]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( i617[i + 0] );
  }
  i612.shaderDefinedKeywords = i616
  var i619 = i613[4]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i619[i + 0]) );
  }
  i612.passes = i618
  var i621 = i613[5]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i621[i + 0]) );
  }
  i612.usePasses = i620
  var i623 = i613[6]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i623[i + 0]) );
  }
  i612.defaultParameterValues = i622
  request.r(i613[7], i613[8], 0, i612, 'unityFallbackShader')
  i612.readDepth = !!i613[9]
  i612.hasDepthOnlyPass = !!i613[10]
  i612.isCreatedByShaderGraph = !!i613[11]
  i612.disableBatching = !!i613[12]
  i612.compiled = !!i613[13]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i627 = data
  i626.shaderName = i627[0]
  i626.errorMessage = i627[1]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i630 = root || new pc.UnityShaderPass()
  var i631 = data
  i630.id = i631[0]
  i630.subShaderIndex = i631[1]
  i630.name = i631[2]
  i630.passType = i631[3]
  i630.grabPassTextureName = i631[4]
  i630.usePass = !!i631[5]
  i630.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i631[6], i630.zTest)
  i630.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i631[7], i630.zWrite)
  i630.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i631[8], i630.culling)
  i630.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i631[9], i630.blending)
  i630.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i631[10], i630.alphaBlending)
  i630.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i631[11], i630.colorWriteMask)
  i630.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i631[12], i630.offsetUnits)
  i630.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i631[13], i630.offsetFactor)
  i630.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i631[14], i630.stencilRef)
  i630.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i631[15], i630.stencilReadMask)
  i630.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i631[16], i630.stencilWriteMask)
  i630.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i631[17], i630.stencilOp)
  i630.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i631[18], i630.stencilOpFront)
  i630.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i631[19], i630.stencilOpBack)
  var i633 = i631[20]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i633[i + 0]) );
  }
  i630.tags = i632
  var i635 = i631[21]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( i635[i + 0] );
  }
  i630.passDefinedKeywords = i634
  var i637 = i631[22]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i637[i + 0]) );
  }
  i630.passDefinedKeywordGroups = i636
  var i639 = i631[23]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i639[i + 0]) );
  }
  i630.variants = i638
  var i641 = i631[24]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i641[i + 0]) );
  }
  i630.excludedVariants = i640
  i630.hasDepthReader = !!i631[25]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i643 = data
  i642.val = i643[0]
  i642.name = i643[1]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i645 = data
  i644.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i645[0], i644.src)
  i644.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i645[1], i644.dst)
  i644.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i645[2], i644.op)
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i647 = data
  i646.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i647[0], i646.pass)
  i646.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i647[1], i646.fail)
  i646.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i647[2], i646.zFail)
  i646.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i647[3], i646.comp)
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i651 = data
  i650.name = i651[0]
  i650.value = i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i655 = data
  var i657 = i655[0]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( i657[i + 0] );
  }
  i654.keywords = i656
  i654.hasDiscard = !!i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i661 = data
  i660.passId = i661[0]
  i660.subShaderIndex = i661[1]
  var i663 = i661[2]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( i663[i + 0] );
  }
  i660.keywords = i662
  i660.vertexProgram = i661[3]
  i660.fragmentProgram = i661[4]
  i660.exportedForWebGl2 = !!i661[5]
  i660.readDepth = !!i661[6]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'shader')
  i666.pass = i667[2]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i671 = data
  i670.name = i671[0]
  i670.type = i671[1]
  i670.value = new pc.Vec4( i671[2], i671[3], i671[4], i671[5] )
  i670.textureValue = i671[6]
  i670.shaderPropertyFlag = i671[7]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i673 = data
  i672.name = i673[0]
  request.r(i673[1], i673[2], 0, i672, 'texture')
  i672.aabb = i673[3]
  i672.vertices = i673[4]
  i672.triangles = i673[5]
  i672.textureRect = UnityEngine.Rect.MinMaxRect(i673[6], i673[7], i673[8], i673[9])
  i672.packedRect = UnityEngine.Rect.MinMaxRect(i673[10], i673[11], i673[12], i673[13])
  i672.border = new pc.Vec4( i673[14], i673[15], i673[16], i673[17] )
  i672.transparency = i673[18]
  i672.bounds = i673[19]
  i672.pixelsPerUnit = i673[20]
  i672.textureWidth = i673[21]
  i672.textureHeight = i673[22]
  i672.nativeSize = new pc.Vec2( i673[23], i673[24] )
  i672.pivot = new pc.Vec2( i673[25], i673[26] )
  i672.textureRectOffset = new pc.Vec2( i673[27], i673[28] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i675 = data
  i674.name = i675[0]
  i674.bytes64 = i675[1]
  i674.data = i675[2]
  return i674
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i677 = data
  var i679 = i677[0]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('UnityEngine.InputSystem.InputActionMap', i679[i + 0]) );
  }
  i676.m_ActionMaps = i678
  var i681 = i677[1]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('UnityEngine.InputSystem.InputControlScheme', i681[i + 0]) );
  }
  i676.m_ControlSchemes = i680
  i676.m_IsProjectWide = !!i677[2]
  return i676
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i685 = data
  i684.m_Name = i685[0]
  i684.m_Id = i685[1]
  request.r(i685[2], i685[3], 0, i684, 'm_Asset')
  var i687 = i685[4]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('UnityEngine.InputSystem.InputAction', i687[i + 0]) );
  }
  i684.m_Actions = i686
  var i689 = i685[5]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('UnityEngine.InputSystem.InputBinding', i689[i + 0]) );
  }
  i684.m_Bindings = i688
  return i684
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i693 = data
  i692.m_Name = i693[0]
  i692.m_Type = i693[1]
  i692.m_ExpectedControlType = i693[2]
  i692.m_Id = i693[3]
  i692.m_Processors = i693[4]
  i692.m_Interactions = i693[5]
  var i695 = i693[6]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('UnityEngine.InputSystem.InputBinding', i695[i + 0]) );
  }
  i692.m_SingletonActionBindings = i694
  i692.m_Flags = i693[7]
  return i692
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i699 = data
  i698.m_Name = i699[0]
  i698.m_Id = i699[1]
  i698.m_Path = i699[2]
  i698.m_Interactions = i699[3]
  i698.m_Processors = i699[4]
  i698.m_Groups = i699[5]
  i698.m_Action = i699[6]
  i698.m_Flags = i699[7]
  return i698
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i703 = data
  i702.m_Name = i703[0]
  i702.m_BindingGroup = i703[1]
  var i705 = i703[2]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i705[i + 0]) );
  }
  i702.m_DeviceRequirements = i704
  return i702
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i709 = data
  i708.m_ControlPath = i709[0]
  i708.m_Flags = i709[1]
  return i708
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_Asset')
  i710.m_ActionId = i711[2]
  return i710
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i712 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i713 = data
  var i715 = i713[0]
  var i714 = []
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 2, i714, '')
  }
  i712.atlasAssets = i714
  i712.scale = i713[1]
  request.r(i713[2], i713[3], 0, i712, 'skeletonJSON')
  var i717 = i713[4]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( i717[i + 0] );
  }
  i712.fromAnimation = i716
  var i719 = i713[5]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( i719[i + 0] );
  }
  i712.toAnimation = i718
  i712.duration = i713[6]
  i712.defaultMix = i713[7]
  request.r(i713[8], i713[9], 0, i712, 'controller')
  return i712
}

Deserializers["Spine.Unity.AtlasAsset"] = function (request, data, root) {
  var i722 = root || request.c( 'Spine.Unity.AtlasAsset' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'atlasFile')
  var i725 = i723[2]
  var i724 = []
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 2, i724, '')
  }
  i722.materials = i724
  return i722
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i726 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i727 = data
  i726.useSafeMode = !!i727[0]
  i726.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i727[1], i726.safeModeOptions)
  i726.timeScale = i727[2]
  i726.unscaledTimeScale = i727[3]
  i726.useSmoothDeltaTime = !!i727[4]
  i726.maxSmoothUnscaledTime = i727[5]
  i726.rewindCallbackMode = i727[6]
  i726.showUnityEditorReport = !!i727[7]
  i726.logBehaviour = i727[8]
  i726.drawGizmos = !!i727[9]
  i726.defaultRecyclable = !!i727[10]
  i726.defaultAutoPlay = i727[11]
  i726.defaultUpdateType = i727[12]
  i726.defaultTimeScaleIndependent = !!i727[13]
  i726.defaultEaseType = i727[14]
  i726.defaultEaseOvershootOrAmplitude = i727[15]
  i726.defaultEasePeriod = i727[16]
  i726.defaultAutoKill = !!i727[17]
  i726.defaultLoopType = i727[18]
  i726.debugMode = !!i727[19]
  i726.debugStoreTargetId = !!i727[20]
  i726.showPreviewPanel = !!i727[21]
  i726.storeSettingsLocation = i727[22]
  i726.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i727[23], i726.modules)
  i726.createASMDEF = !!i727[24]
  i726.showPlayingTweens = !!i727[25]
  i726.showPausedTweens = !!i727[26]
  return i726
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i728 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i729 = data
  i728.logBehaviour = i729[0]
  i728.nestedTweenFailureBehaviour = i729[1]
  return i728
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i730 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i731 = data
  i730.showPanel = !!i731[0]
  i730.audioEnabled = !!i731[1]
  i730.physicsEnabled = !!i731[2]
  i730.physics2DEnabled = !!i731[3]
  i730.spriteEnabled = !!i731[4]
  i730.uiEnabled = !!i731[5]
  i730.textMeshProEnabled = !!i731[6]
  i730.tk2DEnabled = !!i731[7]
  i730.deAudioEnabled = !!i731[8]
  i730.deUnityExtendedEnabled = !!i731[9]
  i730.epoOutlineEnabled = !!i731[10]
  return i730
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i732 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i733 = data
  i732.normalStyle = i733[0]
  i732.normalSpacingOffset = i733[1]
  i732.boldStyle = i733[2]
  i732.boldSpacing = i733[3]
  i732.italicStyle = i733[4]
  i732.tabSize = i733[5]
  request.r(i733[6], i733[7], 0, i732, 'atlas')
  i732.m_SourceFontFileGUID = i733[8]
  i732.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i733[9], i732.m_CreationSettings)
  request.r(i733[10], i733[11], 0, i732, 'm_SourceFontFile')
  i732.m_SourceFontFilePath = i733[12]
  i732.m_AtlasPopulationMode = i733[13]
  i732.InternalDynamicOS = !!i733[14]
  var i735 = i733[15]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i735.length; i += 1) {
    i734.add(request.d('UnityEngine.TextCore.Glyph', i735[i + 0]));
  }
  i732.m_GlyphTable = i734
  var i737 = i733[16]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(request.d('TMPro.TMP_Character', i737[i + 0]));
  }
  i732.m_CharacterTable = i736
  var i739 = i733[17]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 2, i738, '')
  }
  i732.m_AtlasTextures = i738
  i732.m_AtlasTextureIndex = i733[18]
  i732.m_IsMultiAtlasTexturesEnabled = !!i733[19]
  i732.m_GetFontFeatures = !!i733[20]
  i732.m_ClearDynamicDataOnBuild = !!i733[21]
  i732.m_AtlasWidth = i733[22]
  i732.m_AtlasHeight = i733[23]
  i732.m_AtlasPadding = i733[24]
  i732.m_AtlasRenderMode = i733[25]
  var i741 = i733[26]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i741.length; i += 1) {
    i740.add(request.d('UnityEngine.TextCore.GlyphRect', i741[i + 0]));
  }
  i732.m_UsedGlyphRects = i740
  var i743 = i733[27]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i743.length; i += 1) {
    i742.add(request.d('UnityEngine.TextCore.GlyphRect', i743[i + 0]));
  }
  i732.m_FreeGlyphRects = i742
  i732.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i733[28], i732.m_FontFeatureTable)
  i732.m_ShouldReimportFontFeatures = !!i733[29]
  var i745 = i733[30]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 1, i744, '')
  }
  i732.m_FallbackFontAssetTable = i744
  var i747 = i733[31]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('TMPro.TMP_FontWeightPair', i747[i + 0]) );
  }
  i732.m_FontWeightTable = i746
  var i749 = i733[32]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('TMPro.TMP_FontWeightPair', i749[i + 0]) );
  }
  i732.fontWeights = i748
  i732.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i733[33], i732.m_fontInfo)
  var i751 = i733[34]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i751.length; i += 1) {
    i750.add(request.d('TMPro.TMP_Glyph', i751[i + 0]));
  }
  i732.m_glyphInfoList = i750
  i732.m_KerningTable = request.d('TMPro.KerningTable', i733[35], i732.m_KerningTable)
  var i753 = i733[36]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 1, i752, '')
  }
  i732.fallbackFontAssets = i752
  i732.m_Version = i733[37]
  i732.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i733[38], i732.m_FaceInfo)
  request.r(i733[39], i733[40], 0, i732, 'm_Material')
  return i732
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i754 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i755 = data
  i754.sourceFontFileName = i755[0]
  i754.sourceFontFileGUID = i755[1]
  i754.faceIndex = i755[2]
  i754.pointSizeSamplingMode = i755[3]
  i754.pointSize = i755[4]
  i754.padding = i755[5]
  i754.paddingMode = i755[6]
  i754.packingMode = i755[7]
  i754.atlasWidth = i755[8]
  i754.atlasHeight = i755[9]
  i754.characterSetSelectionMode = i755[10]
  i754.characterSequence = i755[11]
  i754.referencedFontAssetGUID = i755[12]
  i754.referencedTextAssetGUID = i755[13]
  i754.fontStyle = i755[14]
  i754.fontStyleModifier = i755[15]
  i754.renderMode = i755[16]
  i754.includeFontFeatures = !!i755[17]
  return i754
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i759 = data
  i758.m_Index = i759[0]
  i758.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i759[1], i758.m_Metrics)
  i758.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i759[2], i758.m_GlyphRect)
  i758.m_Scale = i759[3]
  i758.m_AtlasIndex = i759[4]
  i758.m_ClassDefinitionType = i759[5]
  return i758
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i761 = data
  i760.m_Width = i761[0]
  i760.m_Height = i761[1]
  i760.m_HorizontalBearingX = i761[2]
  i760.m_HorizontalBearingY = i761[3]
  i760.m_HorizontalAdvance = i761[4]
  return i760
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i763 = data
  i762.m_X = i763[0]
  i762.m_Y = i763[1]
  i762.m_Width = i763[2]
  i762.m_Height = i763[3]
  return i762
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i766 = root || request.c( 'TMPro.TMP_Character' )
  var i767 = data
  i766.m_ElementType = i767[0]
  i766.m_Unicode = i767[1]
  i766.m_GlyphIndex = i767[2]
  i766.m_Scale = i767[3]
  return i766
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i772 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i773 = data
  var i775 = i773[0]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('TMPro.MultipleSubstitutionRecord', i775[i + 0]));
  }
  i772.m_MultipleSubstitutionRecords = i774
  var i777 = i773[1]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i777.length; i += 1) {
    i776.add(request.d('TMPro.LigatureSubstitutionRecord', i777[i + 0]));
  }
  i772.m_LigatureSubstitutionRecords = i776
  var i779 = i773[2]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i779[i + 0]));
  }
  i772.m_GlyphPairAdjustmentRecords = i778
  var i781 = i773[3]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i781.length; i += 1) {
    i780.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i781[i + 0]));
  }
  i772.m_MarkToBaseAdjustmentRecords = i780
  var i783 = i773[4]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i783[i + 0]));
  }
  i772.m_MarkToMarkAdjustmentRecords = i782
  return i772
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i786 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i787 = data
  i786.m_TargetGlyphID = i787[0]
  i786.m_SubstituteGlyphIDs = i787[1]
  return i786
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i790 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i791 = data
  i790.m_ComponentGlyphIDs = i791[0]
  i790.m_LigatureGlyphID = i791[1]
  return i790
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i795 = data
  i794.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i795[0], i794.m_FirstAdjustmentRecord)
  i794.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i795[1], i794.m_SecondAdjustmentRecord)
  i794.m_FeatureLookupFlags = i795[2]
  return i794
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i797 = data
  i796.m_GlyphIndex = i797[0]
  i796.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i797[1], i796.m_GlyphValueRecord)
  return i796
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i799 = data
  i798.m_XPlacement = i799[0]
  i798.m_YPlacement = i799[1]
  i798.m_XAdvance = i799[2]
  i798.m_YAdvance = i799[3]
  return i798
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i802 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i803 = data
  i802.m_BaseGlyphID = i803[0]
  i802.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i803[1], i802.m_BaseGlyphAnchorPoint)
  i802.m_MarkGlyphID = i803[2]
  i802.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i803[3], i802.m_MarkPositionAdjustment)
  return i802
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i806 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i807 = data
  i806.m_BaseMarkGlyphID = i807[0]
  i806.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i807[1], i806.m_BaseMarkGlyphAnchorPoint)
  i806.m_CombiningMarkGlyphID = i807[2]
  i806.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i807[3], i806.m_CombiningMarkPositionAdjustment)
  return i806
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i812 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'regularTypeface')
  request.r(i813[2], i813[3], 0, i812, 'italicTypeface')
  return i812
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i815 = data
  i814.Name = i815[0]
  i814.PointSize = i815[1]
  i814.Scale = i815[2]
  i814.CharacterCount = i815[3]
  i814.LineHeight = i815[4]
  i814.Baseline = i815[5]
  i814.Ascender = i815[6]
  i814.CapHeight = i815[7]
  i814.Descender = i815[8]
  i814.CenterLine = i815[9]
  i814.SuperscriptOffset = i815[10]
  i814.SubscriptOffset = i815[11]
  i814.SubSize = i815[12]
  i814.Underline = i815[13]
  i814.UnderlineThickness = i815[14]
  i814.strikethrough = i815[15]
  i814.strikethroughThickness = i815[16]
  i814.TabWidth = i815[17]
  i814.Padding = i815[18]
  i814.AtlasWidth = i815[19]
  i814.AtlasHeight = i815[20]
  return i814
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.TMP_Glyph' )
  var i819 = data
  i818.id = i819[0]
  i818.x = i819[1]
  i818.y = i819[2]
  i818.width = i819[3]
  i818.height = i819[4]
  i818.xOffset = i819[5]
  i818.yOffset = i819[6]
  i818.xAdvance = i819[7]
  i818.scale = i819[8]
  return i818
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i820 = root || request.c( 'TMPro.KerningTable' )
  var i821 = data
  var i823 = i821[0]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i823.length; i += 1) {
    i822.add(request.d('TMPro.KerningPair', i823[i + 0]));
  }
  i820.kerningPairs = i822
  return i820
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i826 = root || request.c( 'TMPro.KerningPair' )
  var i827 = data
  i826.xOffset = i827[0]
  i826.m_FirstGlyph = i827[1]
  i826.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i827[2], i826.m_FirstGlyphAdjustments)
  i826.m_SecondGlyph = i827[3]
  i826.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i827[4], i826.m_SecondGlyphAdjustments)
  i826.m_IgnoreSpacingAdjustments = !!i827[5]
  return i826
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i829 = data
  i828.m_FaceIndex = i829[0]
  i828.m_FamilyName = i829[1]
  i828.m_StyleName = i829[2]
  i828.m_PointSize = i829[3]
  i828.m_Scale = i829[4]
  i828.m_UnitsPerEM = i829[5]
  i828.m_LineHeight = i829[6]
  i828.m_AscentLine = i829[7]
  i828.m_CapLine = i829[8]
  i828.m_MeanLine = i829[9]
  i828.m_Baseline = i829[10]
  i828.m_DescentLine = i829[11]
  i828.m_SuperscriptOffset = i829[12]
  i828.m_SuperscriptSize = i829[13]
  i828.m_SubscriptOffset = i829[14]
  i828.m_SubscriptSize = i829[15]
  i828.m_UnderlineOffset = i829[16]
  i828.m_UnderlineThickness = i829[17]
  i828.m_StrikethroughOffset = i829[18]
  i828.m_StrikethroughThickness = i829[19]
  i828.m_TabWidth = i829[20]
  return i828
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i830 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i831 = data
  var i833 = i831[0]
  var i832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i833.length; i += 1) {
    i832.add(request.d('TMPro.TMP_Style', i833[i + 0]));
  }
  i830.m_StyleList = i832
  return i830
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.TMP_Style' )
  var i837 = data
  i836.m_Name = i837[0]
  i836.m_HashCode = i837[1]
  i836.m_OpeningDefinition = i837[2]
  i836.m_ClosingDefinition = i837[3]
  i836.m_OpeningTagArray = i837[4]
  i836.m_ClosingTagArray = i837[5]
  return i836
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.TMP_Settings' )
  var i839 = data
  i838.assetVersion = i839[0]
  i838.m_TextWrappingMode = i839[1]
  i838.m_enableKerning = !!i839[2]
  var i841 = i839[3]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(i841[i + 0]);
  }
  i838.m_ActiveFontFeatures = i840
  i838.m_enableExtraPadding = !!i839[4]
  i838.m_enableTintAllSprites = !!i839[5]
  i838.m_enableParseEscapeCharacters = !!i839[6]
  i838.m_EnableRaycastTarget = !!i839[7]
  i838.m_GetFontFeaturesAtRuntime = !!i839[8]
  i838.m_missingGlyphCharacter = i839[9]
  i838.m_ClearDynamicDataOnBuild = !!i839[10]
  i838.m_warningsDisabled = !!i839[11]
  request.r(i839[12], i839[13], 0, i838, 'm_defaultFontAsset')
  i838.m_defaultFontAssetPath = i839[14]
  i838.m_defaultFontSize = i839[15]
  i838.m_defaultAutoSizeMinRatio = i839[16]
  i838.m_defaultAutoSizeMaxRatio = i839[17]
  i838.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i839[18], i839[19] )
  i838.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i839[20], i839[21] )
  i838.m_autoSizeTextContainer = !!i839[22]
  i838.m_IsTextObjectScaleStatic = !!i839[23]
  var i843 = i839[24]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 1, i842, '')
  }
  i838.m_fallbackFontAssets = i842
  i838.m_matchMaterialPreset = !!i839[25]
  i838.m_HideSubTextObjects = !!i839[26]
  request.r(i839[27], i839[28], 0, i838, 'm_defaultSpriteAsset')
  i838.m_defaultSpriteAssetPath = i839[29]
  i838.m_enableEmojiSupport = !!i839[30]
  i838.m_MissingCharacterSpriteUnicode = i839[31]
  var i845 = i839[32]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 1, i844, '')
  }
  i838.m_EmojiFallbackTextAssets = i844
  i838.m_defaultColorGradientPresetsPath = i839[33]
  request.r(i839[34], i839[35], 0, i838, 'm_defaultStyleSheet')
  i838.m_StyleSheetsResourcePath = i839[36]
  request.r(i839[37], i839[38], 0, i838, 'm_leadingCharacters')
  request.r(i839[39], i839[40], 0, i838, 'm_followingCharacters')
  i838.m_UseModernHangulLineBreakingRules = !!i839[41]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i851 = data
  var i853 = i851[0]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i853[i + 0]) );
  }
  i850.files = i852
  i850.componentToPrefabIds = i851[1]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i857 = data
  i856.path = i857[0]
  request.r(i857[1], i857[2], 0, i856, 'unityObject')
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i859 = data
  var i861 = i859[0]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i861[i + 0]) );
  }
  i858.scriptsExecutionOrder = i860
  var i863 = i859[1]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i863[i + 0]) );
  }
  i858.sortingLayers = i862
  var i865 = i859[2]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i865[i + 0]) );
  }
  i858.cullingLayers = i864
  i858.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i859[3], i858.timeSettings)
  i858.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i859[4], i858.physicsSettings)
  i858.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i859[5], i858.physics2DSettings)
  i858.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i859[6], i858.qualitySettings)
  i858.enableRealtimeShadows = !!i859[7]
  i858.enableAutoInstancing = !!i859[8]
  i858.enableStaticBatching = !!i859[9]
  i858.enableDynamicBatching = !!i859[10]
  i858.lightmapEncodingQuality = i859[11]
  i858.desiredColorSpace = i859[12]
  var i867 = i859[13]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( i867[i + 0] );
  }
  i858.allTags = i866
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i871 = data
  i870.name = i871[0]
  i870.value = i871[1]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i875 = data
  i874.id = i875[0]
  i874.name = i875[1]
  i874.value = i875[2]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i879 = data
  i878.id = i879[0]
  i878.name = i879[1]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i881 = data
  i880.fixedDeltaTime = i881[0]
  i880.maximumDeltaTime = i881[1]
  i880.timeScale = i881[2]
  i880.maximumParticleTimestep = i881[3]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i883 = data
  i882.gravity = new pc.Vec3( i883[0], i883[1], i883[2] )
  i882.defaultSolverIterations = i883[3]
  i882.bounceThreshold = i883[4]
  i882.autoSyncTransforms = !!i883[5]
  i882.autoSimulation = !!i883[6]
  var i885 = i883[7]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i885[i + 0]) );
  }
  i882.collisionMatrix = i884
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i889 = data
  i888.enabled = !!i889[0]
  i888.layerId = i889[1]
  i888.otherLayerId = i889[2]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'material')
  i890.gravity = new pc.Vec2( i891[2], i891[3] )
  i890.positionIterations = i891[4]
  i890.velocityIterations = i891[5]
  i890.velocityThreshold = i891[6]
  i890.maxLinearCorrection = i891[7]
  i890.maxAngularCorrection = i891[8]
  i890.maxTranslationSpeed = i891[9]
  i890.maxRotationSpeed = i891[10]
  i890.baumgarteScale = i891[11]
  i890.baumgarteTOIScale = i891[12]
  i890.timeToSleep = i891[13]
  i890.linearSleepTolerance = i891[14]
  i890.angularSleepTolerance = i891[15]
  i890.defaultContactOffset = i891[16]
  i890.autoSimulation = !!i891[17]
  i890.queriesHitTriggers = !!i891[18]
  i890.queriesStartInColliders = !!i891[19]
  i890.callbacksOnDisable = !!i891[20]
  i890.reuseCollisionCallbacks = !!i891[21]
  i890.autoSyncTransforms = !!i891[22]
  var i893 = i891[23]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i893[i + 0]) );
  }
  i890.collisionMatrix = i892
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i897 = data
  i896.enabled = !!i897[0]
  i896.layerId = i897[1]
  i896.otherLayerId = i897[2]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i899 = data
  var i901 = i899[0]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i901[i + 0]) );
  }
  i898.qualityLevels = i900
  var i903 = i899[1]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( i903[i + 0] );
  }
  i898.names = i902
  i898.shadows = i899[2]
  i898.anisotropicFiltering = i899[3]
  i898.antiAliasing = i899[4]
  i898.lodBias = i899[5]
  i898.shadowCascades = i899[6]
  i898.shadowDistance = i899[7]
  i898.shadowmaskMode = i899[8]
  i898.shadowProjection = i899[9]
  i898.shadowResolution = i899[10]
  i898.softParticles = !!i899[11]
  i898.softVegetation = !!i899[12]
  i898.activeColorSpace = i899[13]
  i898.desiredColorSpace = i899[14]
  i898.masterTextureLimit = i899[15]
  i898.maxQueuedFrames = i899[16]
  i898.particleRaycastBudget = i899[17]
  i898.pixelLightCount = i899[18]
  i898.realtimeReflectionProbes = !!i899[19]
  i898.shadowCascade2Split = i899[20]
  i898.shadowCascade4Split = new pc.Vec3( i899[21], i899[22], i899[23] )
  i898.streamingMipmapsActive = !!i899[24]
  i898.vSyncCount = i899[25]
  i898.asyncUploadBufferSize = i899[26]
  i898.asyncUploadTimeSlice = i899[27]
  i898.billboardsFaceCameraPosition = !!i899[28]
  i898.shadowNearPlaneOffset = i899[29]
  i898.streamingMipmapsMemoryBudget = i899[30]
  i898.maximumLODLevel = i899[31]
  i898.streamingMipmapsAddAllCameras = !!i899[32]
  i898.streamingMipmapsMaxLevelReduction = i899[33]
  i898.streamingMipmapsRenderersPerFrame = i899[34]
  i898.resolutionScalingFixedDPIFactor = i899[35]
  i898.streamingMipmapsMaxFileIORequests = i899[36]
  i898.currentQualityLevel = i899[37]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i909 = data
  i908.weight = i909[0]
  i908.vertices = i909[1]
  i908.normals = i909[2]
  i908.tangents = i909[3]
  return i908
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i911 = data
  i910.m_XCoordinate = i911[0]
  i910.m_YCoordinate = i911[1]
  return i910
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i913 = data
  i912.m_XPositionAdjustment = i913[0]
  i912.m_YPositionAdjustment = i913[1]
  return i912
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i915 = data
  i914.xPlacement = i915[0]
  i914.yPlacement = i915[1]
  i914.xAdvance = i915[2]
  i914.yAdvance = i915[3]
  return i914
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"37":[38],"39":[38],"40":[38],"41":[38],"42":[38],"43":[38],"44":[45],"46":[2],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[55],"63":[55],"64":[55],"65":[55],"66":[55],"67":[55],"68":[2],"69":[20],"70":[71],"72":[71],"5":[4],"22":[18,20],"73":[74,18,20],"75":[18,20],"76":[9,4],"77":[78],"79":[80],"81":[75],"82":[75],"83":[75],"84":[20,18],"85":[80],"86":[80],"87":[12],"88":[2],"89":[90],"15":[14],"91":[5],"92":[4],"93":[9,4],"94":[20],"95":[9,4],"96":[4],"97":[4],"98":[20,4],"99":[4,9],"100":[101],"102":[101],"103":[101],"104":[4],"105":[4],"8":[5],"10":[9,4],"106":[4],"7":[5],"107":[4],"108":[4],"109":[4],"110":[4],"111":[4],"112":[4],"113":[4],"114":[4],"115":[4],"116":[9,4],"117":[4],"118":[4],"119":[4],"120":[4],"121":[9,4],"122":[4],"123":[14],"124":[14],"125":[14],"126":[14],"127":[2],"128":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.MonoBehaviour","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","TreasureClickSensor","DiggyPlayable.WaterPipeGame.WaterPipeGameView","UnityEngine.GameObject","UnityEngine.SpriteMask","DrowningTimer","DiggyPlayable.DiggyController","DiggyPlayable.GameEntry","Spine.Unity.AtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_FontAsset","TMPro.TMP_StyleSheet","TMPro.TMP_Settings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.SkeletonAnimator","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Modules.SkeletonGhost","Spine.Unity.Modules.SkeletonRagdoll","Spine.Unity.Modules.SkeletonRagdoll2D","Spine.Unity.Modules.SkeletonPartsRenderer","Spine.Unity.Modules.SkeletonUtilityEyeConstraint","Spine.Unity.Modules.SkeletonUtilityGroundConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.71f1";

Deserializers.productName = "DiggyPlayable";

Deserializers.lunaInitializationTime = "03/29/2026 10:43:38";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "38159";

Deserializers.projectId = "55669954d8ea041b6a751d29a31c8185";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.19.0\ncom.unity.timeline: 1.8.10\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1953";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4380";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "bc781ba4-d602-4ee8-bd8f-4a2d820c5f2b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

