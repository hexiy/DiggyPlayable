var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.JointSpring' )
  var i1483 = data
  i1482.spring = i1483[0]
  i1482.damper = i1483[1]
  i1482.targetPosition = i1483[2]
  return i1482
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1484 = root || request.c( 'UnityEngine.JointMotor' )
  var i1485 = data
  i1484.m_TargetVelocity = i1485[0]
  i1484.m_Force = i1485[1]
  i1484.m_FreeSpin = i1485[2]
  return i1484
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.JointLimits' )
  var i1487 = data
  i1486.m_Min = i1487[0]
  i1486.m_Max = i1487[1]
  i1486.m_Bounciness = i1487[2]
  i1486.m_BounceMinVelocity = i1487[3]
  i1486.m_ContactDistance = i1487[4]
  i1486.minBounce = i1487[5]
  i1486.maxBounce = i1487[6]
  return i1486
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1488 = root || request.c( 'UnityEngine.JointDrive' )
  var i1489 = data
  i1488.m_PositionSpring = i1489[0]
  i1488.m_PositionDamper = i1489[1]
  i1488.m_MaximumForce = i1489[2]
  i1488.m_UseAcceleration = i1489[3]
  return i1488
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1491 = data
  i1490.m_Spring = i1491[0]
  i1490.m_Damper = i1491[1]
  return i1490
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1493 = data
  i1492.m_Limit = i1493[0]
  i1492.m_Bounciness = i1493[1]
  i1492.m_ContactDistance = i1493[2]
  return i1492
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1495 = data
  i1494.m_ExtremumSlip = i1495[0]
  i1494.m_ExtremumValue = i1495[1]
  i1494.m_AsymptoteSlip = i1495[2]
  i1494.m_AsymptoteValue = i1495[3]
  i1494.m_Stiffness = i1495[4]
  return i1494
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1496 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1497 = data
  i1496.m_LowerAngle = i1497[0]
  i1496.m_UpperAngle = i1497[1]
  return i1496
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1499 = data
  i1498.m_MotorSpeed = i1499[0]
  i1498.m_MaximumMotorTorque = i1499[1]
  return i1498
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1500 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1501 = data
  i1500.m_DampingRatio = i1501[0]
  i1500.m_Frequency = i1501[1]
  i1500.m_Angle = i1501[2]
  return i1500
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1502 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1503 = data
  i1502.m_LowerTranslation = i1503[0]
  i1502.m_UpperTranslation = i1503[1]
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1505 = data
  i1504.name = i1505[0]
  i1504.halfPrecision = !!i1505[1]
  i1504.useSimplification = !!i1505[2]
  i1504.useUInt32IndexFormat = !!i1505[3]
  i1504.vertexCount = i1505[4]
  i1504.aabb = i1505[5]
  var i1507 = i1505[6]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( !!i1507[i + 0] );
  }
  i1504.streams = i1506
  i1504.vertices = i1505[7]
  var i1509 = i1505[8]
  var i1508 = []
  for(var i = 0; i < i1509.length; i += 1) {
    i1508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1509[i + 0]) );
  }
  i1504.subMeshes = i1508
  var i1511 = i1505[9]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 16) {
    i1510.push( new pc.Mat4().setData(i1511[i + 0], i1511[i + 1], i1511[i + 2], i1511[i + 3],  i1511[i + 4], i1511[i + 5], i1511[i + 6], i1511[i + 7],  i1511[i + 8], i1511[i + 9], i1511[i + 10], i1511[i + 11],  i1511[i + 12], i1511[i + 13], i1511[i + 14], i1511[i + 15]) );
  }
  i1504.bindposes = i1510
  var i1513 = i1505[10]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1513[i + 0]) );
  }
  i1504.blendShapes = i1512
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1519 = data
  i1518.triangles = i1519[0]
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1525 = data
  i1524.name = i1525[0]
  var i1527 = i1525[1]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1527[i + 0]) );
  }
  i1524.frames = i1526
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1528 = root || new pc.UnityMaterial()
  var i1529 = data
  i1528.name = i1529[0]
  request.r(i1529[1], i1529[2], 0, i1528, 'shader')
  i1528.renderQueue = i1529[3]
  i1528.enableInstancing = !!i1529[4]
  var i1531 = i1529[5]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 1) {
    i1530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1531[i + 0]) );
  }
  i1528.floatParameters = i1530
  var i1533 = i1529[6]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1533[i + 0]) );
  }
  i1528.colorParameters = i1532
  var i1535 = i1529[7]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1535[i + 0]) );
  }
  i1528.vectorParameters = i1534
  var i1537 = i1529[8]
  var i1536 = []
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1537[i + 0]) );
  }
  i1528.textureParameters = i1536
  var i1539 = i1529[9]
  var i1538 = []
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1539[i + 0]) );
  }
  i1528.materialFlags = i1538
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1543 = data
  i1542.name = i1543[0]
  i1542.value = i1543[1]
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1547 = data
  i1546.name = i1547[0]
  i1546.value = new pc.Color(i1547[1], i1547[2], i1547[3], i1547[4])
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1551 = data
  i1550.name = i1551[0]
  i1550.value = new pc.Vec4( i1551[1], i1551[2], i1551[3], i1551[4] )
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1555 = data
  i1554.name = i1555[0]
  request.r(i1555[1], i1555[2], 0, i1554, 'value')
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1559 = data
  i1558.name = i1559[0]
  i1558.enabled = !!i1559[1]
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1561 = data
  i1560.name = i1561[0]
  i1560.width = i1561[1]
  i1560.height = i1561[2]
  i1560.mipmapCount = i1561[3]
  i1560.anisoLevel = i1561[4]
  i1560.filterMode = i1561[5]
  i1560.hdr = !!i1561[6]
  i1560.format = i1561[7]
  i1560.wrapMode = i1561[8]
  i1560.alphaIsTransparency = !!i1561[9]
  i1560.alphaSource = i1561[10]
  i1560.graphicsFormat = i1561[11]
  i1560.sRGBTexture = !!i1561[12]
  i1560.desiredColorSpace = i1561[13]
  i1560.wrapU = i1561[14]
  i1560.wrapV = i1561[15]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1563 = data
  i1562.name = i1563[0]
  i1562.index = i1563[1]
  i1562.startup = !!i1563[2]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1565 = data
  i1564.aspect = i1565[0]
  i1564.orthographic = !!i1565[1]
  i1564.orthographicSize = i1565[2]
  i1564.backgroundColor = new pc.Color(i1565[3], i1565[4], i1565[5], i1565[6])
  i1564.nearClipPlane = i1565[7]
  i1564.farClipPlane = i1565[8]
  i1564.fieldOfView = i1565[9]
  i1564.depth = i1565[10]
  i1564.clearFlags = i1565[11]
  i1564.cullingMask = i1565[12]
  i1564.rect = i1565[13]
  request.r(i1565[14], i1565[15], 0, i1564, 'targetTexture')
  i1564.usePhysicalProperties = !!i1565[16]
  i1564.focalLength = i1565[17]
  i1564.sensorSize = new pc.Vec2( i1565[18], i1565[19] )
  i1564.lensShift = new pc.Vec2( i1565[20], i1565[21] )
  i1564.gateFit = i1565[22]
  i1564.commandBufferCount = i1565[23]
  i1564.cameraType = i1565[24]
  i1564.enabled = !!i1565[25]
  return i1564
}

Deserializers["UnityEngine.EventSystems.Physics2DRaycaster"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.EventSystems.Physics2DRaycaster' )
  var i1567 = data
  i1566.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i1567[0] )
  i1566.m_MaxRayIntersections = i1567[1]
  return i1566
}

Deserializers["CameraController"] = function (request, data, root) {
  var i1568 = root || request.c( 'CameraController' )
  var i1569 = data
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1571 = data
  i1570.name = i1571[0]
  i1570.tagId = i1571[1]
  i1570.enabled = !!i1571[2]
  i1570.isStatic = !!i1571[3]
  i1570.layer = i1571[4]
  return i1570
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1573 = data
  request.r(i1573[0], i1573[1], 0, i1572, 'm_FirstSelected')
  i1572.m_sendNavigationEvents = !!i1573[2]
  i1572.m_DragThreshold = i1573[3]
  return i1572
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1575 = data
  i1574.m_HorizontalAxis = i1575[0]
  i1574.m_VerticalAxis = i1575[1]
  i1574.m_SubmitButton = i1575[2]
  i1574.m_CancelButton = i1575[3]
  i1574.m_InputActionsPerSecond = i1575[4]
  i1574.m_RepeatDelay = i1575[5]
  i1574.m_ForceModuleActive = !!i1575[6]
  i1574.m_SendPointerHoverToParent = !!i1575[7]
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1577 = data
  request.r(i1577[0], i1577[1], 0, i1576, 'sharedMesh')
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1579 = data
  request.r(i1579[0], i1579[1], 0, i1578, 'additionalVertexStreams')
  i1578.enabled = !!i1579[2]
  request.r(i1579[3], i1579[4], 0, i1578, 'sharedMaterial')
  var i1581 = i1579[5]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 2) {
  request.r(i1581[i + 0], i1581[i + 1], 2, i1580, '')
  }
  i1578.sharedMaterials = i1580
  i1578.receiveShadows = !!i1579[6]
  i1578.shadowCastingMode = i1579[7]
  i1578.sortingLayerID = i1579[8]
  i1578.sortingOrder = i1579[9]
  i1578.lightmapIndex = i1579[10]
  i1578.lightmapSceneIndex = i1579[11]
  i1578.lightmapScaleOffset = new pc.Vec4( i1579[12], i1579[13], i1579[14], i1579[15] )
  i1578.lightProbeUsage = i1579[16]
  i1578.reflectionProbeUsage = i1579[17]
  return i1578
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1584 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1585 = data
  i1584.loop = !!i1585[0]
  i1584.timeScale = i1585[1]
  request.r(i1585[2], i1585[3], 0, i1584, 'skeletonDataAsset')
  i1584.initialSkinName = i1585[4]
  i1584.initialFlipX = !!i1585[5]
  i1584.initialFlipY = !!i1585[6]
  var i1587 = i1585[7]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.push( i1587[i + 0] );
  }
  i1584.separatorSlotNames = i1586
  i1584.zSpacing = i1585[8]
  i1584.useClipping = !!i1585[9]
  i1584.immutableTriangles = !!i1585[10]
  i1584.pmaVertexColors = !!i1585[11]
  i1584.clearStateOnDisable = !!i1585[12]
  i1584.tintBlack = !!i1585[13]
  i1584.singleSubmesh = !!i1585[14]
  i1584.addNormals = !!i1585[15]
  i1584.calculateTangents = !!i1585[16]
  i1584.logErrors = !!i1585[17]
  i1584.disableRenderingOnOverride = !!i1585[18]
  i1584._animationName = i1585[19]
  return i1584
}

Deserializers["DiggyPlayable.WaterPipeGame.WaterPipeGameView"] = function (request, data, root) {
  var i1590 = root || request.c( 'DiggyPlayable.WaterPipeGame.WaterPipeGameView' )
  var i1591 = data
  request.r(i1591[0], i1591[1], 0, i1590, '_puzzlePanel')
  request.r(i1591[2], i1591[3], 0, i1590, '_endScreenView')
  request.r(i1591[4], i1591[5], 0, i1590, '_tutorialController')
  request.r(i1591[6], i1591[7], 0, i1590, '_diggyController')
  var i1593 = i1591[8]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 2) {
  request.r(i1593[i + 0], i1593[i + 1], 2, i1592, '')
  }
  i1590._pipes = i1592
  request.r(i1591[9], i1591[10], 0, i1590, '_waterLandscape')
  request.r(i1591[11], i1591[12], 0, i1590, '_waterPortrait')
  request.r(i1591[13], i1591[14], 0, i1590, '_timer')
  request.r(i1591[15], i1591[16], 0, i1590, '_collectRewardsHintCG')
  request.r(i1591[17], i1591[18], 0, i1590, '_collectRewardsBackgroundTint')
  request.r(i1591[19], i1591[20], 0, i1590, '_collectRewardsHintHand')
  request.r(i1591[21], i1591[22], 0, i1590, '_collectRewardsHintHandCG')
  request.r(i1591[23], i1591[24], 0, i1590, '_treasureChest_Landscape')
  request.r(i1591[25], i1591[26], 0, i1590, '_treasureChest_Portrait')
  i1590._ease = i1591[27]
  i1590._duration = i1591[28]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1597 = data
  i1596.color = new pc.Color(i1597[0], i1597[1], i1597[2], i1597[3])
  request.r(i1597[4], i1597[5], 0, i1596, 'sprite')
  i1596.flipX = !!i1597[6]
  i1596.flipY = !!i1597[7]
  i1596.drawMode = i1597[8]
  i1596.size = new pc.Vec2( i1597[9], i1597[10] )
  i1596.tileMode = i1597[11]
  i1596.adaptiveModeThreshold = i1597[12]
  i1596.maskInteraction = i1597[13]
  i1596.spriteSortPoint = i1597[14]
  i1596.enabled = !!i1597[15]
  request.r(i1597[16], i1597[17], 0, i1596, 'sharedMaterial')
  var i1599 = i1597[18]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 2) {
  request.r(i1599[i + 0], i1599[i + 1], 2, i1598, '')
  }
  i1596.sharedMaterials = i1598
  i1596.receiveShadows = !!i1597[19]
  i1596.shadowCastingMode = i1597[20]
  i1596.sortingLayerID = i1597[21]
  i1596.sortingOrder = i1597[22]
  i1596.lightmapIndex = i1597[23]
  i1596.lightmapSceneIndex = i1597[24]
  i1596.lightmapScaleOffset = new pc.Vec4( i1597[25], i1597[26], i1597[27], i1597[28] )
  i1596.lightProbeUsage = i1597[29]
  i1596.reflectionProbeUsage = i1597[30]
  return i1596
}

Deserializers["TreasureChest"] = function (request, data, root) {
  var i1600 = root || request.c( 'TreasureChest' )
  var i1601 = data
  request.r(i1601[0], i1601[1], 0, i1600, '_chest')
  request.r(i1601[2], i1601[3], 0, i1600, '_lock')
  i1600._orientation = i1601[4]
  return i1600
}

Deserializers["DiggyPlayable.WaterPipeGame.WaterPipe"] = function (request, data, root) {
  var i1602 = root || request.c( 'DiggyPlayable.WaterPipeGame.WaterPipe' )
  var i1603 = data
  request.r(i1603[0], i1603[1], 0, i1602, 'Reward')
  i1602.RewardCollected = !!i1603[2]
  i1602._isLong = !!i1603[3]
  request.r(i1603[4], i1603[5], 0, i1602, '_clickSensor')
  request.r(i1603[6], i1603[7], 0, i1602, '_pipeVisual')
  i1602._correctRotations = i1603[8]
  i1602._maskPositionEmpty = new pc.Vec2( i1603[9], i1603[10] )
  i1602._maskScaleEmpty = new pc.Vec2( i1603[11], i1603[12] )
  i1602._maskPositionFull = new pc.Vec2( i1603[13], i1603[14] )
  i1602._maskScaleFull = new pc.Vec2( i1603[15], i1603[16] )
  request.r(i1603[17], i1603[18], 0, i1602, '_waterMask')
  i1602._waterRunsOtherWay = !!i1603[19]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i1605 = data
  i1604.frontSortingLayerID = i1605[0]
  i1604.frontSortingOrder = i1605[1]
  i1604.backSortingLayerID = i1605[2]
  i1604.backSortingOrder = i1605[3]
  i1604.alphaCutoff = i1605[4]
  request.r(i1605[5], i1605[6], 0, i1604, 'sprite')
  i1604.tileMode = i1605[7]
  i1604.isCustomRangeActive = !!i1605[8]
  i1604.spriteSortPoint = i1605[9]
  i1604.enabled = !!i1605[10]
  request.r(i1605[11], i1605[12], 0, i1604, 'sharedMaterial')
  var i1607 = i1605[13]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 2) {
  request.r(i1607[i + 0], i1607[i + 1], 2, i1606, '')
  }
  i1604.sharedMaterials = i1606
  i1604.receiveShadows = !!i1605[14]
  i1604.shadowCastingMode = i1605[15]
  i1604.sortingLayerID = i1605[16]
  i1604.sortingOrder = i1605[17]
  i1604.lightmapIndex = i1605[18]
  i1604.lightmapSceneIndex = i1605[19]
  i1604.lightmapScaleOffset = new pc.Vec4( i1605[20], i1605[21], i1605[22], i1605[23] )
  i1604.lightProbeUsage = i1605[24]
  i1604.reflectionProbeUsage = i1605[25]
  return i1604
}

Deserializers["DiggyPlayable.WaterPipeGame.PipeClickSensor"] = function (request, data, root) {
  var i1608 = root || request.c( 'DiggyPlayable.WaterPipeGame.PipeClickSensor' )
  var i1609 = data
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1611 = data
  i1610.usedByComposite = !!i1611[0]
  i1610.autoTiling = !!i1611[1]
  i1610.size = new pc.Vec2( i1611[2], i1611[3] )
  i1610.edgeRadius = i1611[4]
  i1610.enabled = !!i1611[5]
  i1610.isTrigger = !!i1611[6]
  i1610.usedByEffector = !!i1611[7]
  i1610.density = i1611[8]
  i1610.offset = new pc.Vec2( i1611[9], i1611[10] )
  request.r(i1611[11], i1611[12], 0, i1610, 'material')
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1613 = data
  i1612.pivot = new pc.Vec2( i1613[0], i1613[1] )
  i1612.anchorMin = new pc.Vec2( i1613[2], i1613[3] )
  i1612.anchorMax = new pc.Vec2( i1613[4], i1613[5] )
  i1612.sizeDelta = new pc.Vec2( i1613[6], i1613[7] )
  i1612.anchoredPosition3D = new pc.Vec3( i1613[8], i1613[9], i1613[10] )
  i1612.rotation = new pc.Quat(i1613[11], i1613[12], i1613[13], i1613[14])
  i1612.scale = new pc.Vec3( i1613[15], i1613[16], i1613[17] )
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1615 = data
  i1614.planeDistance = i1615[0]
  i1614.referencePixelsPerUnit = i1615[1]
  i1614.isFallbackOverlay = !!i1615[2]
  i1614.renderMode = i1615[3]
  i1614.renderOrder = i1615[4]
  i1614.sortingLayerName = i1615[5]
  i1614.sortingOrder = i1615[6]
  i1614.scaleFactor = i1615[7]
  request.r(i1615[8], i1615[9], 0, i1614, 'worldCamera')
  i1614.overrideSorting = !!i1615[10]
  i1614.pixelPerfect = !!i1615[11]
  i1614.targetDisplay = i1615[12]
  i1614.overridePixelPerfect = !!i1615[13]
  i1614.enabled = !!i1615[14]
  return i1614
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1617 = data
  i1616.m_UiScaleMode = i1617[0]
  i1616.m_ReferencePixelsPerUnit = i1617[1]
  i1616.m_ScaleFactor = i1617[2]
  i1616.m_ReferenceResolution = new pc.Vec2( i1617[3], i1617[4] )
  i1616.m_ScreenMatchMode = i1617[5]
  i1616.m_MatchWidthOrHeight = i1617[6]
  i1616.m_PhysicalUnit = i1617[7]
  i1616.m_FallbackScreenDPI = i1617[8]
  i1616.m_DefaultSpriteDPI = i1617[9]
  i1616.m_DynamicPixelsPerUnit = i1617[10]
  i1616.m_PresetInfoIsWorld = !!i1617[11]
  return i1616
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1619 = data
  i1618.m_IgnoreReversedGraphics = !!i1619[0]
  i1618.m_BlockingObjects = i1619[1]
  i1618.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1619[2] )
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1621 = data
  i1620.cullTransparentMesh = !!i1621[0]
  return i1620
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.UI.Image' )
  var i1623 = data
  request.r(i1623[0], i1623[1], 0, i1622, 'm_Sprite')
  i1622.m_Type = i1623[2]
  i1622.m_PreserveAspect = !!i1623[3]
  i1622.m_FillCenter = !!i1623[4]
  i1622.m_FillMethod = i1623[5]
  i1622.m_FillAmount = i1623[6]
  i1622.m_FillClockwise = !!i1623[7]
  i1622.m_FillOrigin = i1623[8]
  i1622.m_UseSpriteMesh = !!i1623[9]
  i1622.m_PixelsPerUnitMultiplier = i1623[10]
  request.r(i1623[11], i1623[12], 0, i1622, 'm_Material')
  i1622.m_Maskable = !!i1623[13]
  i1622.m_Color = new pc.Color(i1623[14], i1623[15], i1623[16], i1623[17])
  i1622.m_RaycastTarget = !!i1623[18]
  i1622.m_RaycastPadding = new pc.Vec4( i1623[19], i1623[20], i1623[21], i1623[22] )
  return i1622
}

Deserializers["DrowningTimer"] = function (request, data, root) {
  var i1624 = root || request.c( 'DrowningTimer' )
  var i1625 = data
  request.r(i1625[0], i1625[1], 0, i1624, '_timerFill')
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1627 = data
  i1626.m_Alpha = i1627[0]
  i1626.m_Interactable = !!i1627[1]
  i1626.m_BlocksRaycasts = !!i1627[2]
  i1626.m_IgnoreParentGroups = !!i1627[3]
  i1626.enabled = !!i1627[4]
  return i1626
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1628 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1629 = data
  i1628.m_hasFontAssetChanged = !!i1629[0]
  request.r(i1629[1], i1629[2], 0, i1628, 'm_baseMaterial')
  i1628.m_maskOffset = new pc.Vec4( i1629[3], i1629[4], i1629[5], i1629[6] )
  i1628.m_text = i1629[7]
  i1628.m_isRightToLeft = !!i1629[8]
  request.r(i1629[9], i1629[10], 0, i1628, 'm_fontAsset')
  request.r(i1629[11], i1629[12], 0, i1628, 'm_sharedMaterial')
  var i1631 = i1629[13]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 2) {
  request.r(i1631[i + 0], i1631[i + 1], 2, i1630, '')
  }
  i1628.m_fontSharedMaterials = i1630
  request.r(i1629[14], i1629[15], 0, i1628, 'm_fontMaterial')
  var i1633 = i1629[16]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 2) {
  request.r(i1633[i + 0], i1633[i + 1], 2, i1632, '')
  }
  i1628.m_fontMaterials = i1632
  i1628.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1629[17], i1629[18], i1629[19], i1629[20])
  i1628.m_fontColor = new pc.Color(i1629[21], i1629[22], i1629[23], i1629[24])
  i1628.m_enableVertexGradient = !!i1629[25]
  i1628.m_colorMode = i1629[26]
  i1628.m_fontColorGradient = request.d('TMPro.VertexGradient', i1629[27], i1628.m_fontColorGradient)
  request.r(i1629[28], i1629[29], 0, i1628, 'm_fontColorGradientPreset')
  request.r(i1629[30], i1629[31], 0, i1628, 'm_spriteAsset')
  i1628.m_tintAllSprites = !!i1629[32]
  request.r(i1629[33], i1629[34], 0, i1628, 'm_StyleSheet')
  i1628.m_TextStyleHashCode = i1629[35]
  i1628.m_overrideHtmlColors = !!i1629[36]
  i1628.m_faceColor = UnityEngine.Color32.ConstructColor(i1629[37], i1629[38], i1629[39], i1629[40])
  i1628.m_fontSize = i1629[41]
  i1628.m_fontSizeBase = i1629[42]
  i1628.m_fontWeight = i1629[43]
  i1628.m_enableAutoSizing = !!i1629[44]
  i1628.m_fontSizeMin = i1629[45]
  i1628.m_fontSizeMax = i1629[46]
  i1628.m_fontStyle = i1629[47]
  i1628.m_HorizontalAlignment = i1629[48]
  i1628.m_VerticalAlignment = i1629[49]
  i1628.m_textAlignment = i1629[50]
  i1628.m_characterSpacing = i1629[51]
  i1628.m_characterHorizontalScale = i1629[52]
  i1628.m_wordSpacing = i1629[53]
  i1628.m_lineSpacing = i1629[54]
  i1628.m_lineSpacingMax = i1629[55]
  i1628.m_paragraphSpacing = i1629[56]
  i1628.m_charWidthMaxAdj = i1629[57]
  i1628.m_TextWrappingMode = i1629[58]
  i1628.m_wordWrappingRatios = i1629[59]
  i1628.m_overflowMode = i1629[60]
  request.r(i1629[61], i1629[62], 0, i1628, 'm_linkedTextComponent')
  request.r(i1629[63], i1629[64], 0, i1628, 'parentLinkedComponent')
  i1628.m_enableKerning = !!i1629[65]
  var i1635 = i1629[66]
  var i1634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.add(i1635[i + 0]);
  }
  i1628.m_ActiveFontFeatures = i1634
  i1628.m_enableExtraPadding = !!i1629[67]
  i1628.checkPaddingRequired = !!i1629[68]
  i1628.m_isRichText = !!i1629[69]
  i1628.m_parseCtrlCharacters = !!i1629[70]
  i1628.m_isOrthographic = !!i1629[71]
  i1628.m_isCullingEnabled = !!i1629[72]
  i1628.m_horizontalMapping = i1629[73]
  i1628.m_verticalMapping = i1629[74]
  i1628.m_uvLineOffset = i1629[75]
  i1628.m_geometrySortingOrder = i1629[76]
  i1628.m_IsTextObjectScaleStatic = !!i1629[77]
  i1628.m_VertexBufferAutoSizeReduction = !!i1629[78]
  i1628.m_useMaxVisibleDescender = !!i1629[79]
  i1628.m_pageToDisplay = i1629[80]
  i1628.m_margin = new pc.Vec4( i1629[81], i1629[82], i1629[83], i1629[84] )
  i1628.m_isUsingLegacyAnimationComponent = !!i1629[85]
  i1628.m_isVolumetricText = !!i1629[86]
  request.r(i1629[87], i1629[88], 0, i1628, 'm_Material')
  i1628.m_EmojiFallbackSupport = !!i1629[89]
  i1628.m_Maskable = !!i1629[90]
  i1628.m_Color = new pc.Color(i1629[91], i1629[92], i1629[93], i1629[94])
  i1628.m_RaycastTarget = !!i1629[95]
  i1628.m_RaycastPadding = new pc.Vec4( i1629[96], i1629[97], i1629[98], i1629[99] )
  return i1628
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1636 = root || request.c( 'TMPro.VertexGradient' )
  var i1637 = data
  i1636.topLeft = new pc.Color(i1637[0], i1637[1], i1637[2], i1637[3])
  i1636.topRight = new pc.Color(i1637[4], i1637[5], i1637[6], i1637[7])
  i1636.bottomLeft = new pc.Color(i1637[8], i1637[9], i1637[10], i1637[11])
  i1636.bottomRight = new pc.Color(i1637[12], i1637[13], i1637[14], i1637[15])
  return i1636
}

Deserializers["DiggyPlayable.EndScreen.EndScreenView"] = function (request, data, root) {
  var i1640 = root || request.c( 'DiggyPlayable.EndScreen.EndScreenView' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, '_cg')
  return i1640
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1642 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1643 = data
  i1642.m_AspectMode = i1643[0]
  i1642.m_AspectRatio = i1643[1]
  return i1642
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.UI.Button' )
  var i1645 = data
  i1644.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1645[0], i1644.m_OnClick)
  i1644.m_Navigation = request.d('UnityEngine.UI.Navigation', i1645[1], i1644.m_Navigation)
  i1644.m_Transition = i1645[2]
  i1644.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1645[3], i1644.m_Colors)
  i1644.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1645[4], i1644.m_SpriteState)
  i1644.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1645[5], i1644.m_AnimationTriggers)
  i1644.m_Interactable = !!i1645[6]
  request.r(i1645[7], i1645[8], 0, i1644, 'm_TargetGraphic')
  return i1644
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1647 = data
  i1646.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1647[0], i1646.m_PersistentCalls)
  return i1646
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1648 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1649 = data
  var i1651 = i1649[0]
  var i1650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.add(request.d('UnityEngine.Events.PersistentCall', i1651[i + 0]));
  }
  i1648.m_Calls = i1650
  return i1648
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'm_Target')
  i1654.m_TargetAssemblyTypeName = i1655[2]
  i1654.m_MethodName = i1655[3]
  i1654.m_Mode = i1655[4]
  i1654.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1655[5], i1654.m_Arguments)
  i1654.m_CallState = i1655[6]
  return i1654
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1656 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1657 = data
  request.r(i1657[0], i1657[1], 0, i1656, 'm_ObjectArgument')
  i1656.m_ObjectArgumentAssemblyTypeName = i1657[2]
  i1656.m_IntArgument = i1657[3]
  i1656.m_FloatArgument = i1657[4]
  i1656.m_StringArgument = i1657[5]
  i1656.m_BoolArgument = !!i1657[6]
  return i1656
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1659 = data
  i1658.m_Mode = i1659[0]
  i1658.m_WrapAround = !!i1659[1]
  request.r(i1659[2], i1659[3], 0, i1658, 'm_SelectOnUp')
  request.r(i1659[4], i1659[5], 0, i1658, 'm_SelectOnDown')
  request.r(i1659[6], i1659[7], 0, i1658, 'm_SelectOnLeft')
  request.r(i1659[8], i1659[9], 0, i1658, 'm_SelectOnRight')
  return i1658
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1661 = data
  i1660.m_NormalColor = new pc.Color(i1661[0], i1661[1], i1661[2], i1661[3])
  i1660.m_HighlightedColor = new pc.Color(i1661[4], i1661[5], i1661[6], i1661[7])
  i1660.m_PressedColor = new pc.Color(i1661[8], i1661[9], i1661[10], i1661[11])
  i1660.m_SelectedColor = new pc.Color(i1661[12], i1661[13], i1661[14], i1661[15])
  i1660.m_DisabledColor = new pc.Color(i1661[16], i1661[17], i1661[18], i1661[19])
  i1660.m_ColorMultiplier = i1661[20]
  i1660.m_FadeDuration = i1661[21]
  return i1660
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1663 = data
  request.r(i1663[0], i1663[1], 0, i1662, 'm_HighlightedSprite')
  request.r(i1663[2], i1663[3], 0, i1662, 'm_PressedSprite')
  request.r(i1663[4], i1663[5], 0, i1662, 'm_SelectedSprite')
  request.r(i1663[6], i1663[7], 0, i1662, 'm_DisabledSprite')
  return i1662
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1665 = data
  i1664.m_NormalTrigger = i1665[0]
  i1664.m_HighlightedTrigger = i1665[1]
  i1664.m_PressedTrigger = i1665[2]
  i1664.m_SelectedTrigger = i1665[3]
  i1664.m_DisabledTrigger = i1665[4]
  return i1664
}

Deserializers["ButtonTween"] = function (request, data, root) {
  var i1666 = root || request.c( 'ButtonTween' )
  var i1667 = data
  request.r(i1667[0], i1667[1], 0, i1666, 'CG')
  i1666._disabledColorIsNormalColor = !!i1667[2]
  return i1666
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i1668 = root || request.c( 'PlayNowButton' )
  var i1669 = data
  return i1668
}

Deserializers["DiggyPlayable.DiggyController"] = function (request, data, root) {
  var i1670 = root || request.c( 'DiggyPlayable.DiggyController' )
  var i1671 = data
  request.r(i1671[0], i1671[1], 0, i1670, '_diggy')
  request.r(i1671[2], i1671[3], 0, i1670, '_animationController')
  i1670._positionTopLandscape = new pc.Vec2( i1671[4], i1671[5] )
  i1670._positionTopPortrait = new pc.Vec2( i1671[6], i1671[7] )
  i1670._positionBottomLandscape = new pc.Vec2( i1671[8], i1671[9] )
  i1670._positionBottomPortrait = new pc.Vec2( i1671[10], i1671[11] )
  return i1670
}

Deserializers["DiggyPlayable.DiggyAnimationController"] = function (request, data, root) {
  var i1672 = root || request.c( 'DiggyPlayable.DiggyAnimationController' )
  var i1673 = data
  request.r(i1673[0], i1673[1], 0, i1672, 'spine')
  i1672._showPreview = !!i1673[2]
  i1672._previewAnimation = i1673[3]
  return i1672
}

Deserializers["DiggyPlayable.OrientationManager"] = function (request, data, root) {
  var i1674 = root || request.c( 'DiggyPlayable.OrientationManager' )
  var i1675 = data
  return i1674
}

Deserializers["DiggyPlayable.OrientationObjectsController"] = function (request, data, root) {
  var i1676 = root || request.c( 'DiggyPlayable.OrientationObjectsController' )
  var i1677 = data
  var i1679 = i1677[0]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 2) {
  request.r(i1679[i + 0], i1679[i + 1], 2, i1678, '')
  }
  i1676._landscapeObjects = i1678
  var i1681 = i1677[1]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 2) {
  request.r(i1681[i + 0], i1681[i + 1], 2, i1680, '')
  }
  i1676._portraitObjects = i1680
  return i1676
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1684 = root || request.c( 'AudioController' )
  var i1685 = data
  request.r(i1685[0], i1685[1], 0, i1684, '_musicSource')
  request.r(i1685[2], i1685[3], 0, i1684, '_soundSource')
  request.r(i1685[4], i1685[5], 0, i1684, '_soundSource2')
  request.r(i1685[6], i1685[7], 0, i1684, '_musicClip')
  request.r(i1685[8], i1685[9], 0, i1684, '_pipeClickClip')
  request.r(i1685[10], i1685[11], 0, i1684, '_pipesFinishedWinClip')
  request.r(i1685[12], i1685[13], 0, i1684, '_waterFlowClip')
  request.r(i1685[14], i1685[15], 0, i1684, '_rewardRevealClip')
  request.r(i1685[16], i1685[17], 0, i1684, '_rewardCollectClip')
  request.r(i1685[18], i1685[19], 0, i1684, '_endScreenClip')
  request.r(i1685[20], i1685[21], 0, i1684, '_rewardTouchChestClip')
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1687 = data
  request.r(i1687[0], i1687[1], 0, i1686, 'clip')
  request.r(i1687[2], i1687[3], 0, i1686, 'outputAudioMixerGroup')
  i1686.playOnAwake = !!i1687[4]
  i1686.loop = !!i1687[5]
  i1686.time = i1687[6]
  i1686.volume = i1687[7]
  i1686.pitch = i1687[8]
  i1686.enabled = !!i1687[9]
  return i1686
}

Deserializers["TutorialController"] = function (request, data, root) {
  var i1688 = root || request.c( 'TutorialController' )
  var i1689 = data
  request.r(i1689[0], i1689[1], 0, i1688, '_tutorialHand')
  return i1688
}

Deserializers["DiggyPlayable.GameEntry"] = function (request, data, root) {
  var i1690 = root || request.c( 'DiggyPlayable.GameEntry' )
  var i1691 = data
  request.r(i1691[0], i1691[1], 0, i1690, '_diggyController')
  request.r(i1691[2], i1691[3], 0, i1690, '_pipeGameView')
  request.r(i1691[4], i1691[5], 0, i1690, '_endScreenView')
  request.r(i1691[6], i1691[7], 0, i1690, '_drowningTimer')
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1693 = data
  i1692.ambientIntensity = i1693[0]
  i1692.reflectionIntensity = i1693[1]
  i1692.ambientMode = i1693[2]
  i1692.ambientLight = new pc.Color(i1693[3], i1693[4], i1693[5], i1693[6])
  i1692.ambientSkyColor = new pc.Color(i1693[7], i1693[8], i1693[9], i1693[10])
  i1692.ambientGroundColor = new pc.Color(i1693[11], i1693[12], i1693[13], i1693[14])
  i1692.ambientEquatorColor = new pc.Color(i1693[15], i1693[16], i1693[17], i1693[18])
  i1692.fogColor = new pc.Color(i1693[19], i1693[20], i1693[21], i1693[22])
  i1692.fogEndDistance = i1693[23]
  i1692.fogStartDistance = i1693[24]
  i1692.fogDensity = i1693[25]
  i1692.fog = !!i1693[26]
  request.r(i1693[27], i1693[28], 0, i1692, 'skybox')
  i1692.fogMode = i1693[29]
  var i1695 = i1693[30]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1695[i + 0]) );
  }
  i1692.lightmaps = i1694
  i1692.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1693[31], i1692.lightProbes)
  i1692.lightmapsMode = i1693[32]
  i1692.mixedBakeMode = i1693[33]
  i1692.environmentLightingMode = i1693[34]
  i1692.ambientProbe = new pc.SphericalHarmonicsL2(i1693[35])
  i1692.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1693[36])
  i1692.useReferenceAmbientProbe = !!i1693[37]
  request.r(i1693[38], i1693[39], 0, i1692, 'customReflection')
  request.r(i1693[40], i1693[41], 0, i1692, 'defaultReflection')
  i1692.defaultReflectionMode = i1693[42]
  i1692.defaultReflectionResolution = i1693[43]
  i1692.sunLightObjectId = i1693[44]
  i1692.pixelLightCount = i1693[45]
  i1692.defaultReflectionHDR = !!i1693[46]
  i1692.hasLightDataAsset = !!i1693[47]
  i1692.hasManualGenerate = !!i1693[48]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1699 = data
  request.r(i1699[0], i1699[1], 0, i1698, 'lightmapColor')
  request.r(i1699[2], i1699[3], 0, i1698, 'lightmapDirection')
  request.r(i1699[4], i1699[5], 0, i1698, 'shadowMask')
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1700 = root || new UnityEngine.LightProbes()
  var i1701 = data
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1709 = data
  var i1711 = i1709[0]
  var i1710 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1711[i + 0]));
  }
  i1708.ShaderCompilationErrors = i1710
  i1708.name = i1709[1]
  i1708.guid = i1709[2]
  var i1713 = i1709[3]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.push( i1713[i + 0] );
  }
  i1708.shaderDefinedKeywords = i1712
  var i1715 = i1709[4]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1715[i + 0]) );
  }
  i1708.passes = i1714
  var i1717 = i1709[5]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1717[i + 0]) );
  }
  i1708.usePasses = i1716
  var i1719 = i1709[6]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1719[i + 0]) );
  }
  i1708.defaultParameterValues = i1718
  request.r(i1709[7], i1709[8], 0, i1708, 'unityFallbackShader')
  i1708.readDepth = !!i1709[9]
  i1708.hasDepthOnlyPass = !!i1709[10]
  i1708.isCreatedByShaderGraph = !!i1709[11]
  i1708.disableBatching = !!i1709[12]
  i1708.compiled = !!i1709[13]
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1723 = data
  i1722.shaderName = i1723[0]
  i1722.errorMessage = i1723[1]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1726 = root || new pc.UnityShaderPass()
  var i1727 = data
  i1726.id = i1727[0]
  i1726.subShaderIndex = i1727[1]
  i1726.name = i1727[2]
  i1726.passType = i1727[3]
  i1726.grabPassTextureName = i1727[4]
  i1726.usePass = !!i1727[5]
  i1726.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[6], i1726.zTest)
  i1726.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[7], i1726.zWrite)
  i1726.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[8], i1726.culling)
  i1726.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1727[9], i1726.blending)
  i1726.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1727[10], i1726.alphaBlending)
  i1726.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[11], i1726.colorWriteMask)
  i1726.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[12], i1726.offsetUnits)
  i1726.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[13], i1726.offsetFactor)
  i1726.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[14], i1726.stencilRef)
  i1726.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[15], i1726.stencilReadMask)
  i1726.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[16], i1726.stencilWriteMask)
  i1726.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1727[17], i1726.stencilOp)
  i1726.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1727[18], i1726.stencilOpFront)
  i1726.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1727[19], i1726.stencilOpBack)
  var i1729 = i1727[20]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1729[i + 0]) );
  }
  i1726.tags = i1728
  var i1731 = i1727[21]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( i1731[i + 0] );
  }
  i1726.passDefinedKeywords = i1730
  var i1733 = i1727[22]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1733[i + 0]) );
  }
  i1726.passDefinedKeywordGroups = i1732
  var i1735 = i1727[23]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1735[i + 0]) );
  }
  i1726.variants = i1734
  var i1737 = i1727[24]
  var i1736 = []
  for(var i = 0; i < i1737.length; i += 1) {
    i1736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1737[i + 0]) );
  }
  i1726.excludedVariants = i1736
  i1726.hasDepthReader = !!i1727[25]
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1739 = data
  i1738.val = i1739[0]
  i1738.name = i1739[1]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1741 = data
  i1740.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[0], i1740.src)
  i1740.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[1], i1740.dst)
  i1740.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[2], i1740.op)
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1743 = data
  i1742.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[0], i1742.pass)
  i1742.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[1], i1742.fail)
  i1742.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[2], i1742.zFail)
  i1742.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[3], i1742.comp)
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1747 = data
  i1746.name = i1747[0]
  i1746.value = i1747[1]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1751 = data
  var i1753 = i1751[0]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.push( i1753[i + 0] );
  }
  i1750.keywords = i1752
  i1750.hasDiscard = !!i1751[1]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1757 = data
  i1756.passId = i1757[0]
  i1756.subShaderIndex = i1757[1]
  var i1759 = i1757[2]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( i1759[i + 0] );
  }
  i1756.keywords = i1758
  i1756.vertexProgram = i1757[3]
  i1756.fragmentProgram = i1757[4]
  i1756.exportedForWebGl2 = !!i1757[5]
  i1756.readDepth = !!i1757[6]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1763 = data
  request.r(i1763[0], i1763[1], 0, i1762, 'shader')
  i1762.pass = i1763[2]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1767 = data
  i1766.name = i1767[0]
  i1766.type = i1767[1]
  i1766.value = new pc.Vec4( i1767[2], i1767[3], i1767[4], i1767[5] )
  i1766.textureValue = i1767[6]
  i1766.shaderPropertyFlag = i1767[7]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1769 = data
  i1768.name = i1769[0]
  request.r(i1769[1], i1769[2], 0, i1768, 'texture')
  i1768.aabb = i1769[3]
  i1768.vertices = i1769[4]
  i1768.triangles = i1769[5]
  i1768.textureRect = UnityEngine.Rect.MinMaxRect(i1769[6], i1769[7], i1769[8], i1769[9])
  i1768.packedRect = UnityEngine.Rect.MinMaxRect(i1769[10], i1769[11], i1769[12], i1769[13])
  i1768.border = new pc.Vec4( i1769[14], i1769[15], i1769[16], i1769[17] )
  i1768.transparency = i1769[18]
  i1768.bounds = i1769[19]
  i1768.pixelsPerUnit = i1769[20]
  i1768.textureWidth = i1769[21]
  i1768.textureHeight = i1769[22]
  i1768.nativeSize = new pc.Vec2( i1769[23], i1769[24] )
  i1768.pivot = new pc.Vec2( i1769[25], i1769[26] )
  i1768.textureRectOffset = new pc.Vec2( i1769[27], i1769[28] )
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1771 = data
  i1770.name = i1771[0]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1773 = data
  i1772.name = i1773[0]
  i1772.bytes64 = i1773[1]
  i1772.data = i1773[2]
  return i1772
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1774 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1775 = data
  var i1777 = i1775[0]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 2) {
  request.r(i1777[i + 0], i1777[i + 1], 2, i1776, '')
  }
  i1774.atlasAssets = i1776
  i1774.scale = i1775[1]
  request.r(i1775[2], i1775[3], 0, i1774, 'skeletonJSON')
  var i1779 = i1775[4]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.push( i1779[i + 0] );
  }
  i1774.fromAnimation = i1778
  var i1781 = i1775[5]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( i1781[i + 0] );
  }
  i1774.toAnimation = i1780
  i1774.duration = i1775[6]
  i1774.defaultMix = i1775[7]
  request.r(i1775[8], i1775[9], 0, i1774, 'controller')
  return i1774
}

Deserializers["Spine.Unity.AtlasAsset"] = function (request, data, root) {
  var i1784 = root || request.c( 'Spine.Unity.AtlasAsset' )
  var i1785 = data
  request.r(i1785[0], i1785[1], 0, i1784, 'atlasFile')
  var i1787 = i1785[2]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 2) {
  request.r(i1787[i + 0], i1787[i + 1], 2, i1786, '')
  }
  i1784.materials = i1786
  return i1784
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1788 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1789 = data
  i1788.normalStyle = i1789[0]
  i1788.normalSpacingOffset = i1789[1]
  i1788.boldStyle = i1789[2]
  i1788.boldSpacing = i1789[3]
  i1788.italicStyle = i1789[4]
  i1788.tabSize = i1789[5]
  request.r(i1789[6], i1789[7], 0, i1788, 'atlas')
  i1788.m_SourceFontFileGUID = i1789[8]
  i1788.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1789[9], i1788.m_CreationSettings)
  request.r(i1789[10], i1789[11], 0, i1788, 'm_SourceFontFile')
  i1788.m_SourceFontFilePath = i1789[12]
  i1788.m_AtlasPopulationMode = i1789[13]
  i1788.InternalDynamicOS = !!i1789[14]
  var i1791 = i1789[15]
  var i1790 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.add(request.d('UnityEngine.TextCore.Glyph', i1791[i + 0]));
  }
  i1788.m_GlyphTable = i1790
  var i1793 = i1789[16]
  var i1792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.add(request.d('TMPro.TMP_Character', i1793[i + 0]));
  }
  i1788.m_CharacterTable = i1792
  var i1795 = i1789[17]
  var i1794 = []
  for(var i = 0; i < i1795.length; i += 2) {
  request.r(i1795[i + 0], i1795[i + 1], 2, i1794, '')
  }
  i1788.m_AtlasTextures = i1794
  i1788.m_AtlasTextureIndex = i1789[18]
  i1788.m_IsMultiAtlasTexturesEnabled = !!i1789[19]
  i1788.m_GetFontFeatures = !!i1789[20]
  i1788.m_ClearDynamicDataOnBuild = !!i1789[21]
  i1788.m_AtlasWidth = i1789[22]
  i1788.m_AtlasHeight = i1789[23]
  i1788.m_AtlasPadding = i1789[24]
  i1788.m_AtlasRenderMode = i1789[25]
  var i1797 = i1789[26]
  var i1796 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.add(request.d('UnityEngine.TextCore.GlyphRect', i1797[i + 0]));
  }
  i1788.m_UsedGlyphRects = i1796
  var i1799 = i1789[27]
  var i1798 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.add(request.d('UnityEngine.TextCore.GlyphRect', i1799[i + 0]));
  }
  i1788.m_FreeGlyphRects = i1798
  i1788.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1789[28], i1788.m_FontFeatureTable)
  i1788.m_ShouldReimportFontFeatures = !!i1789[29]
  var i1801 = i1789[30]
  var i1800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1801.length; i += 2) {
  request.r(i1801[i + 0], i1801[i + 1], 1, i1800, '')
  }
  i1788.m_FallbackFontAssetTable = i1800
  var i1803 = i1789[31]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.push( request.d('TMPro.TMP_FontWeightPair', i1803[i + 0]) );
  }
  i1788.m_FontWeightTable = i1802
  var i1805 = i1789[32]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('TMPro.TMP_FontWeightPair', i1805[i + 0]) );
  }
  i1788.fontWeights = i1804
  i1788.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1789[33], i1788.m_fontInfo)
  var i1807 = i1789[34]
  var i1806 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.add(request.d('TMPro.TMP_Glyph', i1807[i + 0]));
  }
  i1788.m_glyphInfoList = i1806
  i1788.m_KerningTable = request.d('TMPro.KerningTable', i1789[35], i1788.m_KerningTable)
  var i1809 = i1789[36]
  var i1808 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1809.length; i += 2) {
  request.r(i1809[i + 0], i1809[i + 1], 1, i1808, '')
  }
  i1788.fallbackFontAssets = i1808
  i1788.m_Version = i1789[37]
  i1788.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1789[38], i1788.m_FaceInfo)
  request.r(i1789[39], i1789[40], 0, i1788, 'm_Material')
  return i1788
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1810 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1811 = data
  i1810.sourceFontFileName = i1811[0]
  i1810.sourceFontFileGUID = i1811[1]
  i1810.faceIndex = i1811[2]
  i1810.pointSizeSamplingMode = i1811[3]
  i1810.pointSize = i1811[4]
  i1810.padding = i1811[5]
  i1810.paddingMode = i1811[6]
  i1810.packingMode = i1811[7]
  i1810.atlasWidth = i1811[8]
  i1810.atlasHeight = i1811[9]
  i1810.characterSetSelectionMode = i1811[10]
  i1810.characterSequence = i1811[11]
  i1810.referencedFontAssetGUID = i1811[12]
  i1810.referencedTextAssetGUID = i1811[13]
  i1810.fontStyle = i1811[14]
  i1810.fontStyleModifier = i1811[15]
  i1810.renderMode = i1811[16]
  i1810.includeFontFeatures = !!i1811[17]
  return i1810
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1814 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1815 = data
  i1814.m_Index = i1815[0]
  i1814.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1815[1], i1814.m_Metrics)
  i1814.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1815[2], i1814.m_GlyphRect)
  i1814.m_Scale = i1815[3]
  i1814.m_AtlasIndex = i1815[4]
  i1814.m_ClassDefinitionType = i1815[5]
  return i1814
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1816 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1817 = data
  i1816.m_Width = i1817[0]
  i1816.m_Height = i1817[1]
  i1816.m_HorizontalBearingX = i1817[2]
  i1816.m_HorizontalBearingY = i1817[3]
  i1816.m_HorizontalAdvance = i1817[4]
  return i1816
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1818 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1819 = data
  i1818.m_X = i1819[0]
  i1818.m_Y = i1819[1]
  i1818.m_Width = i1819[2]
  i1818.m_Height = i1819[3]
  return i1818
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1822 = root || request.c( 'TMPro.TMP_Character' )
  var i1823 = data
  i1822.m_ElementType = i1823[0]
  i1822.m_Unicode = i1823[1]
  i1822.m_GlyphIndex = i1823[2]
  i1822.m_Scale = i1823[3]
  return i1822
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1828 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1829 = data
  var i1831 = i1829[0]
  var i1830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.add(request.d('TMPro.MultipleSubstitutionRecord', i1831[i + 0]));
  }
  i1828.m_MultipleSubstitutionRecords = i1830
  var i1833 = i1829[1]
  var i1832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.add(request.d('TMPro.LigatureSubstitutionRecord', i1833[i + 0]));
  }
  i1828.m_LigatureSubstitutionRecords = i1832
  var i1835 = i1829[2]
  var i1834 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1835[i + 0]));
  }
  i1828.m_GlyphPairAdjustmentRecords = i1834
  var i1837 = i1829[3]
  var i1836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1837[i + 0]));
  }
  i1828.m_MarkToBaseAdjustmentRecords = i1836
  var i1839 = i1829[4]
  var i1838 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1839[i + 0]));
  }
  i1828.m_MarkToMarkAdjustmentRecords = i1838
  return i1828
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1842 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1843 = data
  i1842.m_TargetGlyphID = i1843[0]
  i1842.m_SubstituteGlyphIDs = i1843[1]
  return i1842
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1846 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1847 = data
  i1846.m_ComponentGlyphIDs = i1847[0]
  i1846.m_LigatureGlyphID = i1847[1]
  return i1846
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1850 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1851 = data
  i1850.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1851[0], i1850.m_FirstAdjustmentRecord)
  i1850.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1851[1], i1850.m_SecondAdjustmentRecord)
  i1850.m_FeatureLookupFlags = i1851[2]
  return i1850
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1854 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1855 = data
  i1854.m_BaseGlyphID = i1855[0]
  i1854.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1855[1], i1854.m_BaseGlyphAnchorPoint)
  i1854.m_MarkGlyphID = i1855[2]
  i1854.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1855[3], i1854.m_MarkPositionAdjustment)
  return i1854
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1858 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1859 = data
  i1858.m_BaseMarkGlyphID = i1859[0]
  i1858.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1859[1], i1858.m_BaseMarkGlyphAnchorPoint)
  i1858.m_CombiningMarkGlyphID = i1859[2]
  i1858.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1859[3], i1858.m_CombiningMarkPositionAdjustment)
  return i1858
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1864 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1865 = data
  request.r(i1865[0], i1865[1], 0, i1864, 'regularTypeface')
  request.r(i1865[2], i1865[3], 0, i1864, 'italicTypeface')
  return i1864
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1866 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1867 = data
  i1866.Name = i1867[0]
  i1866.PointSize = i1867[1]
  i1866.Scale = i1867[2]
  i1866.CharacterCount = i1867[3]
  i1866.LineHeight = i1867[4]
  i1866.Baseline = i1867[5]
  i1866.Ascender = i1867[6]
  i1866.CapHeight = i1867[7]
  i1866.Descender = i1867[8]
  i1866.CenterLine = i1867[9]
  i1866.SuperscriptOffset = i1867[10]
  i1866.SubscriptOffset = i1867[11]
  i1866.SubSize = i1867[12]
  i1866.Underline = i1867[13]
  i1866.UnderlineThickness = i1867[14]
  i1866.strikethrough = i1867[15]
  i1866.strikethroughThickness = i1867[16]
  i1866.TabWidth = i1867[17]
  i1866.Padding = i1867[18]
  i1866.AtlasWidth = i1867[19]
  i1866.AtlasHeight = i1867[20]
  return i1866
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1870 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1871 = data
  i1870.id = i1871[0]
  i1870.x = i1871[1]
  i1870.y = i1871[2]
  i1870.width = i1871[3]
  i1870.height = i1871[4]
  i1870.xOffset = i1871[5]
  i1870.yOffset = i1871[6]
  i1870.xAdvance = i1871[7]
  i1870.scale = i1871[8]
  return i1870
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1872 = root || request.c( 'TMPro.KerningTable' )
  var i1873 = data
  var i1875 = i1873[0]
  var i1874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.add(request.d('TMPro.KerningPair', i1875[i + 0]));
  }
  i1872.kerningPairs = i1874
  return i1872
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1878 = root || request.c( 'TMPro.KerningPair' )
  var i1879 = data
  i1878.xOffset = i1879[0]
  i1878.m_FirstGlyph = i1879[1]
  i1878.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1879[2], i1878.m_FirstGlyphAdjustments)
  i1878.m_SecondGlyph = i1879[3]
  i1878.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1879[4], i1878.m_SecondGlyphAdjustments)
  i1878.m_IgnoreSpacingAdjustments = !!i1879[5]
  return i1878
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1880 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1881 = data
  i1880.m_FaceIndex = i1881[0]
  i1880.m_FamilyName = i1881[1]
  i1880.m_StyleName = i1881[2]
  i1880.m_PointSize = i1881[3]
  i1880.m_Scale = i1881[4]
  i1880.m_UnitsPerEM = i1881[5]
  i1880.m_LineHeight = i1881[6]
  i1880.m_AscentLine = i1881[7]
  i1880.m_CapLine = i1881[8]
  i1880.m_MeanLine = i1881[9]
  i1880.m_Baseline = i1881[10]
  i1880.m_DescentLine = i1881[11]
  i1880.m_SuperscriptOffset = i1881[12]
  i1880.m_SuperscriptSize = i1881[13]
  i1880.m_SubscriptOffset = i1881[14]
  i1880.m_SubscriptSize = i1881[15]
  i1880.m_UnderlineOffset = i1881[16]
  i1880.m_UnderlineThickness = i1881[17]
  i1880.m_StrikethroughOffset = i1881[18]
  i1880.m_StrikethroughThickness = i1881[19]
  i1880.m_TabWidth = i1881[20]
  return i1880
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1882 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1883 = data
  i1882.useSafeMode = !!i1883[0]
  i1882.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1883[1], i1882.safeModeOptions)
  i1882.timeScale = i1883[2]
  i1882.unscaledTimeScale = i1883[3]
  i1882.useSmoothDeltaTime = !!i1883[4]
  i1882.maxSmoothUnscaledTime = i1883[5]
  i1882.rewindCallbackMode = i1883[6]
  i1882.showUnityEditorReport = !!i1883[7]
  i1882.logBehaviour = i1883[8]
  i1882.drawGizmos = !!i1883[9]
  i1882.defaultRecyclable = !!i1883[10]
  i1882.defaultAutoPlay = i1883[11]
  i1882.defaultUpdateType = i1883[12]
  i1882.defaultTimeScaleIndependent = !!i1883[13]
  i1882.defaultEaseType = i1883[14]
  i1882.defaultEaseOvershootOrAmplitude = i1883[15]
  i1882.defaultEasePeriod = i1883[16]
  i1882.defaultAutoKill = !!i1883[17]
  i1882.defaultLoopType = i1883[18]
  i1882.debugMode = !!i1883[19]
  i1882.debugStoreTargetId = !!i1883[20]
  i1882.showPreviewPanel = !!i1883[21]
  i1882.storeSettingsLocation = i1883[22]
  i1882.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1883[23], i1882.modules)
  i1882.createASMDEF = !!i1883[24]
  i1882.showPlayingTweens = !!i1883[25]
  i1882.showPausedTweens = !!i1883[26]
  return i1882
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1884 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1885 = data
  i1884.logBehaviour = i1885[0]
  i1884.nestedTweenFailureBehaviour = i1885[1]
  return i1884
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1886 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1887 = data
  i1886.showPanel = !!i1887[0]
  i1886.audioEnabled = !!i1887[1]
  i1886.physicsEnabled = !!i1887[2]
  i1886.physics2DEnabled = !!i1887[3]
  i1886.spriteEnabled = !!i1887[4]
  i1886.uiEnabled = !!i1887[5]
  i1886.textMeshProEnabled = !!i1887[6]
  i1886.tk2DEnabled = !!i1887[7]
  i1886.deAudioEnabled = !!i1887[8]
  i1886.deUnityExtendedEnabled = !!i1887[9]
  i1886.epoOutlineEnabled = !!i1887[10]
  return i1886
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1888 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1889 = data
  i1888.m_GlyphIndex = i1889[0]
  i1888.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1889[1], i1888.m_GlyphValueRecord)
  return i1888
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1890 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1891 = data
  i1890.m_XPlacement = i1891[0]
  i1890.m_YPlacement = i1891[1]
  i1890.m_XAdvance = i1891[2]
  i1890.m_YAdvance = i1891[3]
  return i1890
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1892 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1893 = data
  var i1895 = i1893[0]
  var i1894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.add(request.d('TMPro.TMP_Style', i1895[i + 0]));
  }
  i1892.m_StyleList = i1894
  return i1892
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1898 = root || request.c( 'TMPro.TMP_Style' )
  var i1899 = data
  i1898.m_Name = i1899[0]
  i1898.m_HashCode = i1899[1]
  i1898.m_OpeningDefinition = i1899[2]
  i1898.m_ClosingDefinition = i1899[3]
  i1898.m_OpeningTagArray = i1899[4]
  i1898.m_ClosingTagArray = i1899[5]
  return i1898
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1900 = root || request.c( 'TMPro.TMP_Settings' )
  var i1901 = data
  i1900.assetVersion = i1901[0]
  i1900.m_TextWrappingMode = i1901[1]
  i1900.m_enableKerning = !!i1901[2]
  var i1903 = i1901[3]
  var i1902 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.add(i1903[i + 0]);
  }
  i1900.m_ActiveFontFeatures = i1902
  i1900.m_enableExtraPadding = !!i1901[4]
  i1900.m_enableTintAllSprites = !!i1901[5]
  i1900.m_enableParseEscapeCharacters = !!i1901[6]
  i1900.m_EnableRaycastTarget = !!i1901[7]
  i1900.m_GetFontFeaturesAtRuntime = !!i1901[8]
  i1900.m_missingGlyphCharacter = i1901[9]
  i1900.m_ClearDynamicDataOnBuild = !!i1901[10]
  i1900.m_warningsDisabled = !!i1901[11]
  request.r(i1901[12], i1901[13], 0, i1900, 'm_defaultFontAsset')
  i1900.m_defaultFontAssetPath = i1901[14]
  i1900.m_defaultFontSize = i1901[15]
  i1900.m_defaultAutoSizeMinRatio = i1901[16]
  i1900.m_defaultAutoSizeMaxRatio = i1901[17]
  i1900.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1901[18], i1901[19] )
  i1900.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1901[20], i1901[21] )
  i1900.m_autoSizeTextContainer = !!i1901[22]
  i1900.m_IsTextObjectScaleStatic = !!i1901[23]
  var i1905 = i1901[24]
  var i1904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1905.length; i += 2) {
  request.r(i1905[i + 0], i1905[i + 1], 1, i1904, '')
  }
  i1900.m_fallbackFontAssets = i1904
  i1900.m_matchMaterialPreset = !!i1901[25]
  i1900.m_HideSubTextObjects = !!i1901[26]
  request.r(i1901[27], i1901[28], 0, i1900, 'm_defaultSpriteAsset')
  i1900.m_defaultSpriteAssetPath = i1901[29]
  i1900.m_enableEmojiSupport = !!i1901[30]
  i1900.m_MissingCharacterSpriteUnicode = i1901[31]
  var i1907 = i1901[32]
  var i1906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1907.length; i += 2) {
  request.r(i1907[i + 0], i1907[i + 1], 1, i1906, '')
  }
  i1900.m_EmojiFallbackTextAssets = i1906
  i1900.m_defaultColorGradientPresetsPath = i1901[33]
  request.r(i1901[34], i1901[35], 0, i1900, 'm_defaultStyleSheet')
  i1900.m_StyleSheetsResourcePath = i1901[36]
  request.r(i1901[37], i1901[38], 0, i1900, 'm_leadingCharacters')
  request.r(i1901[39], i1901[40], 0, i1900, 'm_followingCharacters')
  i1900.m_UseModernHangulLineBreakingRules = !!i1901[41]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1911 = data
  var i1913 = i1911[0]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1913[i + 0]) );
  }
  i1910.files = i1912
  i1910.componentToPrefabIds = i1911[1]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1917 = data
  i1916.path = i1917[0]
  request.r(i1917[1], i1917[2], 0, i1916, 'unityObject')
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1919 = data
  var i1921 = i1919[0]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1921[i + 0]) );
  }
  i1918.scriptsExecutionOrder = i1920
  var i1923 = i1919[1]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1923[i + 0]) );
  }
  i1918.sortingLayers = i1922
  var i1925 = i1919[2]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1925[i + 0]) );
  }
  i1918.cullingLayers = i1924
  i1918.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1919[3], i1918.timeSettings)
  i1918.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1919[4], i1918.physicsSettings)
  i1918.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1919[5], i1918.physics2DSettings)
  i1918.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1919[6], i1918.qualitySettings)
  i1918.enableRealtimeShadows = !!i1919[7]
  i1918.enableAutoInstancing = !!i1919[8]
  i1918.enableStaticBatching = !!i1919[9]
  i1918.enableDynamicBatching = !!i1919[10]
  i1918.lightmapEncodingQuality = i1919[11]
  i1918.desiredColorSpace = i1919[12]
  var i1927 = i1919[13]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( i1927[i + 0] );
  }
  i1918.allTags = i1926
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1931 = data
  i1930.name = i1931[0]
  i1930.value = i1931[1]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1935 = data
  i1934.id = i1935[0]
  i1934.name = i1935[1]
  i1934.value = i1935[2]
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1939 = data
  i1938.id = i1939[0]
  i1938.name = i1939[1]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1941 = data
  i1940.fixedDeltaTime = i1941[0]
  i1940.maximumDeltaTime = i1941[1]
  i1940.timeScale = i1941[2]
  i1940.maximumParticleTimestep = i1941[3]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1943 = data
  i1942.gravity = new pc.Vec3( i1943[0], i1943[1], i1943[2] )
  i1942.defaultSolverIterations = i1943[3]
  i1942.bounceThreshold = i1943[4]
  i1942.autoSyncTransforms = !!i1943[5]
  i1942.autoSimulation = !!i1943[6]
  var i1945 = i1943[7]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1945[i + 0]) );
  }
  i1942.collisionMatrix = i1944
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1949 = data
  i1948.enabled = !!i1949[0]
  i1948.layerId = i1949[1]
  i1948.otherLayerId = i1949[2]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1951 = data
  request.r(i1951[0], i1951[1], 0, i1950, 'material')
  i1950.gravity = new pc.Vec2( i1951[2], i1951[3] )
  i1950.positionIterations = i1951[4]
  i1950.velocityIterations = i1951[5]
  i1950.velocityThreshold = i1951[6]
  i1950.maxLinearCorrection = i1951[7]
  i1950.maxAngularCorrection = i1951[8]
  i1950.maxTranslationSpeed = i1951[9]
  i1950.maxRotationSpeed = i1951[10]
  i1950.baumgarteScale = i1951[11]
  i1950.baumgarteTOIScale = i1951[12]
  i1950.timeToSleep = i1951[13]
  i1950.linearSleepTolerance = i1951[14]
  i1950.angularSleepTolerance = i1951[15]
  i1950.defaultContactOffset = i1951[16]
  i1950.autoSimulation = !!i1951[17]
  i1950.queriesHitTriggers = !!i1951[18]
  i1950.queriesStartInColliders = !!i1951[19]
  i1950.callbacksOnDisable = !!i1951[20]
  i1950.reuseCollisionCallbacks = !!i1951[21]
  i1950.autoSyncTransforms = !!i1951[22]
  var i1953 = i1951[23]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1953[i + 0]) );
  }
  i1950.collisionMatrix = i1952
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1957 = data
  i1956.enabled = !!i1957[0]
  i1956.layerId = i1957[1]
  i1956.otherLayerId = i1957[2]
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1959 = data
  var i1961 = i1959[0]
  var i1960 = []
  for(var i = 0; i < i1961.length; i += 1) {
    i1960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1961[i + 0]) );
  }
  i1958.qualityLevels = i1960
  var i1963 = i1959[1]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( i1963[i + 0] );
  }
  i1958.names = i1962
  i1958.shadows = i1959[2]
  i1958.anisotropicFiltering = i1959[3]
  i1958.antiAliasing = i1959[4]
  i1958.lodBias = i1959[5]
  i1958.shadowCascades = i1959[6]
  i1958.shadowDistance = i1959[7]
  i1958.shadowmaskMode = i1959[8]
  i1958.shadowProjection = i1959[9]
  i1958.shadowResolution = i1959[10]
  i1958.softParticles = !!i1959[11]
  i1958.softVegetation = !!i1959[12]
  i1958.activeColorSpace = i1959[13]
  i1958.desiredColorSpace = i1959[14]
  i1958.masterTextureLimit = i1959[15]
  i1958.maxQueuedFrames = i1959[16]
  i1958.particleRaycastBudget = i1959[17]
  i1958.pixelLightCount = i1959[18]
  i1958.realtimeReflectionProbes = !!i1959[19]
  i1958.shadowCascade2Split = i1959[20]
  i1958.shadowCascade4Split = new pc.Vec3( i1959[21], i1959[22], i1959[23] )
  i1958.streamingMipmapsActive = !!i1959[24]
  i1958.vSyncCount = i1959[25]
  i1958.asyncUploadBufferSize = i1959[26]
  i1958.asyncUploadTimeSlice = i1959[27]
  i1958.billboardsFaceCameraPosition = !!i1959[28]
  i1958.shadowNearPlaneOffset = i1959[29]
  i1958.streamingMipmapsMemoryBudget = i1959[30]
  i1958.maximumLODLevel = i1959[31]
  i1958.streamingMipmapsAddAllCameras = !!i1959[32]
  i1958.streamingMipmapsMaxLevelReduction = i1959[33]
  i1958.streamingMipmapsRenderersPerFrame = i1959[34]
  i1958.resolutionScalingFixedDPIFactor = i1959[35]
  i1958.streamingMipmapsMaxFileIORequests = i1959[36]
  i1958.currentQualityLevel = i1959[37]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1969 = data
  i1968.weight = i1969[0]
  i1968.vertices = i1969[1]
  i1968.normals = i1969[2]
  i1968.tangents = i1969[3]
  return i1968
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1970 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1971 = data
  i1970.m_XCoordinate = i1971[0]
  i1970.m_YCoordinate = i1971[1]
  return i1970
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1972 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1973 = data
  i1972.m_XPositionAdjustment = i1973[0]
  i1972.m_YPositionAdjustment = i1973[1]
  return i1972
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1974 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1975 = data
  i1974.xPlacement = i1975[0]
  i1974.yPlacement = i1975[1]
  i1974.xAdvance = i1975[2]
  i1974.yAdvance = i1975[3]
  return i1974
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

Deserializers.runtimeAnalysisExcludedClassesCount = "1805";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5083";

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

Deserializers.buildID = "c84f005e-7851-451f-a851-54a2a0ff25f2";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

