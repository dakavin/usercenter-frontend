import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {BLOG_LINK} from "@/constants";
const Footer: React.FC = () => {
  const defaultMessage = 'Dakkk出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'blog',
          title: 'Dakkk Blog',
          href: BLOG_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> Dakkk GitHub</>,
          href: 'https://github.com/dakavin',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
