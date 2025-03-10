/* eslint-disable */
/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  USE_PASSAGE: 'server-chan',
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxabfe57a62cbb8188',
  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e1d43d6d1cc2557caf48aa76a0caff0e',
  PROVINCE: '湖南',
  CITY: '长沙',
  USERS: [
    {
      // 想要发送的人的名字
      name: '亲爱的41',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'SCT200199Tt5LHwk2fbquZfLL6ARN5IMQS',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      PROVINCE: '湖南',
      CITY: '长沙',
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '3-24',
      festivals: [
      ],
    },
  ],
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0010',
  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'SCT200199Tt5LHwk2fbquZfLL6ARN5IMQS',
    }
  ],
}

module.exports = USER_CONFIG

