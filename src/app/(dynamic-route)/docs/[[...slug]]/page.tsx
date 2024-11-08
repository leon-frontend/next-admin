import type { FC } from 'react'
import type { DocsSlugProps } from './type'

// ---------------------------- DocsSlug 组件 -----------------------------
const DocsSlug: FC<DocsSlugProps> = async ({ params }) => {
  const slug = (await params).slug // 异步获取 params 中的值

  if (slug?.length === 2) {
    // 存在两个动态路由参数时，返回下面的 HTML 结构
    return (
      <div>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </div>
    )
  } else if (slug?.length === 1) {
    // 只有一个动态路由参数时，返回下面的 HTML 结构
    return <div>Viewing docs for feature {slug[0]}</div>
  }

  /**
   * 情况 1：[...slug]/page.tsx 组件（DocsSlug 组件）无法匹配 /docs 路由，必须要带参数。
   *        所有当大于 2 个路由参数时，返回下面的 HTML 结构。
   * 情况 2：[[...slug]]/page.tsx 组件（DocsSlug 组件）可以匹配 /docs 路由。
   *        所以当没有路由参数时，也会返回下面的 HTML 结构。
   */
  return <div>Docs home page</div>
}

export default DocsSlug
