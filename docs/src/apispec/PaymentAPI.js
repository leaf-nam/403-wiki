export default {
  title: 'Payment API',
  apis: [
    {
      id: 'payment-1',
      spec: '?-?',
      method: 'GET',
      uri: '/coaches/categories?division1={대분류명}&division2={소분류명}',
      privilege: '0',
      description: '* 아직 작성되지 않음 : 차후에 설계 예정',
      request: {},
      response: {
        name: 'List<CoachesResponseDto>',
        success: {
          description: '해당 코치정보 리스트로 반환',
          code: '200',
          data: {
            '* type': 'List',
            name: 'String',
            avgScore: 'Float',
            description: 'String',
            lessonInfo: 'String',
            lessonPrice: 'Integer'
          }
        },
        fail: {
          description: '잘못된 요청',
          code: '403',
          data: { message: 'String' }
        }
      }
    }
  ]
}
