// 定义 DocsSlug 组件的 Props 的 TS 类型
export type DocsSlugProps = {
  params: Promise<{
    slug?: string[] // slug 的值可能为 undefined
  }>
}
